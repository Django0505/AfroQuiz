exports.answer_uganda_quiz = function (req, res, next) {
        
var input = JSON.parse(JSON.stringify(req.body));
var data = {
            day : input.day,
            date : input.date,
            stock_item : input.stock_item,
            no_sold : input.no_sold,
            sales_price : "R"+input.sales_price,
            category_name : input.category_name
    };
};