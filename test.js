var fs = require("fs");

convert_question_csv_to_json = function (filename, filename2) {
	var read_file = fs.readFileSync(filename, "utf-8");
	var regexp = /\r?\n/;
	var file_rows = read_file.split(regexp);
	var file_row_cols = file_rows.map(function(row, i){
		var line = row.split(",");
		options= line[2].split(";")

		options.forEach(function(opt){
			console.log(opt+i);
		})

		

		return {
			question: line[0],
			answer: line[1].split(";"),

		}
	});

	var to_be_json = JSON.stringify(file_row_cols);

	fs.writeFileSync(filename2, to_be_json);
	console.log(to_be_json)
}

convert_question_csv_to_json("./uganda_questions.csv", "uganda_questions.json");
