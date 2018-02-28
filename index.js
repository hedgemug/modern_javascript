import moment from 'moment';
var math = require('mathjs');

console.log('hello from index.js');

var datetime = moment().endOf('day').fromNow(); 
console.log("The day will be over " + datetime);

console.log(math.sqrt(4));

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}`);