var fs = require("fs");

convert_question_csv_to_json = function (filename, filename2) {
	var read_file = fs.readFileSync(filename, "utf-8");
	var regexp = /\r?\n/;
	var file_rows = read_file.split(regexp);
	var file_row_cols = file_rows.map(function(row, i){
		var line = row.split(","),

		opt= line[2].split(";");
		
		var options = [];
		
		opt.forEach(function(opts){
			options.push({name: opts, id : i+1});
		})

		return {
			question: line[0],
			answer: line[1].split(";"),
			options : options
		}
	});

	var to_be_json = JSON.stringify(file_row_cols);
	fs.writeFileSync(filename2, to_be_json);
}

convert_question_csv_to_json("./uganda_questions.csv", "uganda_questions.json");
/*convert_question_csv_to_json("./chad_questions.csv", "chad_questions.json");
convert_question_csv_to_json("./ethiopia_questions.csv", "ethiopia_questions.json");
convert_question_csv_to_json("./nigeria_questions.csv", "nigeria_questions.json");
convert_question_csv_to_json("./senegal_questions.csv", "senegal_questions.json");*/
