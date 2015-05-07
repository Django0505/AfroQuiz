var express = require('express'),
    exphbs  = require('express-handlebars');

var app = express();

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

app.use("/static", express.static("views"));
app.use("/static", express.static("."));

app.get("/", function(req, res){
	res.render("home")
});

app.get("/learn", function (req, res) {
	res.render("learn");
});

app.get("/uganda_quiz", function(req, res){
	res.render("uganda_quiz");
});

app.get("/chad_quiz", function(req, res){
	res.render("chad_quiz");
});

app.get("/nigeria_quiz", function(req, res){
	res.render("nigeria_quiz");
});

app.get("/senegal_quiz", function(req, res){
	res.render("senegal_quiz");
});

app.get("/ethiopia_quiz", function(req, res){
	res.render("ethiopia_quiz");
})

app.get("*", function(req, res){
	res.render("default_page")
});

var port = process.env.PORT || 5100;

var server = app.listen(port, function(){

	console.log("server is running on " + server.address().address + ":" +server.address().port)

});