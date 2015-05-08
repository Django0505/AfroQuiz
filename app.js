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

app.get("/nigeria_quiz", function(req, res){
	res.render("nigeria_quiz", {nigeria_quiz:countriesMap["nigeria_quiz"]});
});

app.get("/senegal_quiz", function(req, res){
	res.render("senegal_quiz", {senegal_quiz:countriesMap["senegal_quiz"]});
});

app.get("/ethiopia_quiz", function(req, res){
	res.render("ethiopia_quiz", {ethiopia_quiz:countriesMap["ethiopia_quiz"]});

});
app.post("/ethiopia_quiz/ethiopia_quiz_report", function(req, res){

	var countries = countriesMap["ethiopia_quiz"];
	
	var answers = {
			Question_1 : "How many national sport teams does Ethiopia have?" ,
			answer_1 : "2",
			Question_2 :"What is the life expectancy in Ethopia?",
			answer_2 : "42years",
			Question_3 :"True or False? Ethiopia never lost independence?",
			answer_3 : "TRUE",
			Question_4 :"What is Ethopia's national dish?,",
			answer_4 : "Wat",
			Question_5 :"How many months does the Ethiopian calendar consist of?",
			answer_5 : "13 months",
			Question_6 :"What is Ethopia's currency?",
			answer_6 : "Birr",
			Question_7 :"The constitution that is in use now replaced something. What is it replacing?",
			answer_7 : "Shengo",
			Question_8 :"What is Ethipia's country code?",
			answer_8 : "251",
			Question_9 :"The name Ethiopia mean “burnt of visage”. Which language is it derived from?",
			answer_9 : "Greek",
			Question_10 :"The counntry has 2 self autonomous regions, what those regions?",
			answer_10 : ["Capital Addis Ababa","Dire Dawa"]
		};

	countries.forEach(function(country, i){
		var k = 1+i;
		console.log(k)
	});

	res.render("ethiopia_answers", {answers : answers,
							});
})

app.get("*", function(req, res){
	res.render("default_page")
});

var port = process.env.PORT || 5100;

var server = app.listen(port, function(){

	console.log("server is running on " + server.address().address + ":" +server.address().port)

});