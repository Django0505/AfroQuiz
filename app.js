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
			Question_1 : "Which is the longest river in Uganda?",
			answer_1 : "Nile River",
			Question_2 : "What makes Uganda more temperate than surrounding countries?",
			answer_2 : "Altitude",
			Question_3 : "What is Uganda's climate?",
			answer_3 : "Tropical",
			Question_4 : "What are Uganda's primary exports?",
			answer_4 : ["Coffee","Tea","Cotton","Flowers"],
			Question_5 : "Which sea Uganda has access to?",
			answer_5 : "None",
			Question_6 : "On what date do they celebrate independency?",
			answer_6 : "Oct 09",
			Question_7 :  "What was the last population count?",
			answer_7 : "35 million",
			Question_8 : "How may dry seasons Uganda experience in a year?",
			answer_8 : "2",
			Question_9 : "Which political party is ruling in Uganda?",
			answer_9 : "National Resistance Movement",
			Question_10 : "True or False? The Equator does not pass through Uganda.",
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
})

app.get("*", function(req, res){
	res.render("default_page")
});

var port = process.env.PORT || 5100;

var server = app.listen(port, function(){

	console.log("server is running on " + server.address().address + ":" +server.address().port)

});