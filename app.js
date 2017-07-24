console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('Andrew'));
var filteredArray = _.uniq(['Andrew']);
console.log(filteredArray);
//let user = os.userInfo();

//fs.appendFile('greenting.txt', `Hello ${user.username}! You are ${notes.age}`);
