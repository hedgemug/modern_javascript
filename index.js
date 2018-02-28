var moment = require('moment');
var math = require('mathjs');

console.log('hello from index.js');

var datetime = moment().endOf('day').fromNow(); 
console.log("The day will be over " + datetime);

console.log("sanity");
console.log(math.sqrt(4));