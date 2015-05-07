var express = require('express'),
    exphbs  = require('express-handlebars'),
    bodyParser = require("body-parser");

var app = express();

var countries  = {
	"uganda" : {

		}

};


app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/static", express.static("views"));
app.use("/static", express.static("."));

var countriesMap = {
	'uganda' : require("./uganda_questions.json"),

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
	var uganda_quiz = require("./uganda_questions.json");

	res.render("uganda_quiz", {uganda_quiz:uganda_quiz});
});

app.post("/uganda_quiz/uganda_quiz_report", function(req, res){
	var input = JSON.parse(JSON.stringify(req.body));
	console.log(req.body)
	res.redirect("/");
})

app.get("/chad_quiz", function(req, res){
	var chad_quiz = require("./chad_questions.json");
	res.render("chad_quiz", {chad_quiz:chad_quiz});
});

app.get("/nigeria_quiz", function(req, res){
	var nigeria_quiz = require("./nigeria_questions.json");
	res.render("nigeria_quiz", {nigeria_quiz:nigeria_quiz});
});

app.get("/senegal_quiz", function(req, res){
	var senegal_quiz = require("./senegal_questions.json");
	res.render("senegal_quiz", {senegal_quiz:senegal_quiz});
});

app.get("/ethiopia_quiz", function(req, res){
	var ethiopia_quiz = require("./ethiopia_questions.json");
	res.render("ethiopia_quiz", {ethiopia_quiz:ethiopia_quiz});
})

app.get("*", function(req, res){
	res.render("default_page")
});

var port = process.env.PORT || 5100;

var server = app.listen(port, function(){

	console.log("server is running on " + server.address().address + ":" +server.address().port)

});