var express = require('express'),
    exphbs  = require('express-handlebars'),
    bodyParser = require("body-parser");

var app = express();

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/static", express.static("views"));
app.use("/static", express.static("."));

var countriesMap = {
	'uganda_quiz' : require("./uganda_questions.json"),
	'chad_quiz' : require("./chad_questions.json"),
	'ethiopia_quiz' : require("./ethiopia_questions.json"),
	'nigeria_quiz' : require("./nigeria_questions.json"),
	'senegal_quiz' : require("./senegal_questions.json")
}

app.get("/", function(req, res){
	res.render("home")
});

app.get("/learn", function (req, res) {
	res.render("learn");
});

app.get('/quiz/:country_name', function(){
	var country_name = req.params.country_name
});

app.get("/uganda_quiz", function(req, res){
	res.render("uganda_quiz", {uganda_quiz:countriesMap["uganda_quiz"]});
});

app.post("/uganda_quiz/uganda_quiz_report", function(req, res){

	var countries = countriesMap["uganda_quiz"];
	
	var answers = {
			Question_1 : "True or false? Age does not earn earn respect in many families in Nigeria." ,
			answer_1 : "Nile River",
			answer_2 : "Altitude",
			answer_3 : "Tropical",
			answer_4 : ["Coffee","Tea","Cotton","Flowers"],
			answer_5 : "None",
			answer_6 : "Oct 09",
			answer_7 : "35 million",
			answer_8 : "2",
			answer_9 : "National Resistance Movement",
			answer_10 : "TRUE"
		};

	countries.forEach(function(country, i){
		var k = 1+i;
		console.log(k)
	});

	res.render("uganda_answers", {answers : answers,
							});
})

app.get("/chad_quiz", function(req, res){
	res.render("chad_quiz", {chad_quiz:countriesMap["chad_quiz"]});
});

app.post("/chad_quiz/chad_quiz_report", function(req, res){

	var countries = countriesMap["chad_quiz"];

	var answers = {
		Question_1 = "What do you call people from Chad?",
		answer_1 = "Chadians",
		Question_2 = "What are the colours in Chad nation flag?",
		answer_2 = ["Red", "Blue", "Yellow"],
		Question_3 = "Chad's flag is Similar to which countries flag?",
		answer_3 = "Romania",
		Question_4 ="Name the two rivers in Chad that are only navigable in wet seasons?",
		answer_4 = ["Chari river","Legon river"],
		Question_5 ="Chad's capital town?",
		answer_5 = "N'Djamena",
		Question_6 = "Name 2 Chad's official languages?",
		answer_6 = ["French","Arabic"],
		Question_7 ="How many regions is Chad divided into?",
		answer_7 = "22 Regions",
		Question_8 = "What percantage of Chad's population is poor?"
		answer_8 = "80%"
	}

	countries.forEach(function(country, i){
		var k = 1+i;
		console.log(k)
	});

	res.redirect("/chad_quiz",{answer:answer});
})

app.get("/nigeria_quiz", function(req, res){
	res.render("nigeria_quiz", {nigeria_quiz:countriesMap["nigeria_quiz"]});
});

app.get("/senegal_quiz", function(req, res){
	res.render("senegal_quiz", {senegal_quiz:countriesMap["senegal_quiz"]});
});

app.get("/ethiopia_quiz", function(req, res){
	res.render("ethiopia_quiz", {ethiopia_quiz:countriesMap["ethiopia_quiz"]});
})

app.get("*", function(req, res){
	res.render("default_page")
});

var port = process.env.PORT || 5100;

var server = app.listen(port, function(){

	console.log("server is running on " + server.address().address + ":" +server.address().port)

});