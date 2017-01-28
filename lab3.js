/**
 * Created by yopat on 2017-01-27.
 */
let http = require('http');
let url = require('url');
let accounting = require('accounting');

http.createServer(function(request, response) {
    let input = url.parse(request.url, true).query;
    let x_value =  parseFloat(input.x);
    let y_value = parseFloat(input.y);
    let method = input.method ;

    if(method == 'add'){
        answerFunction(response,x_value,y_value, "+" ,(x_value + y_value));
    }else if(method == 'subtract'){
        answerFunction(response,x_value,y_value, "-" ,(x_value - y_value));
    }else if (method == 'multiply'){
        answerFunction(response,x_value,y_value, "*" ,(x_value - y_value));
    }else if(method == 'divide'){
        answerFunction(response,x_value,y_value, "/" ,(x_value / y_value));
    }else
    {
        response.end("Error!!! please enter correct value");
    }

    function answerFunction(alternate,val1,val2,val3,res){
        alternate.end("Answer:- "+val1 +" "+val3+ " "+ val2+" = "+ res );

    }


}).listen(3000);

console.log('Node calculator running');
