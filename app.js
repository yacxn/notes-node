console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

let res = notes.addNote();
console.log(res);

//let user = os.userInfo();

//fs.appendFile('greenting.txt', `Hello ${user.username}! You are ${notes.age}`);
