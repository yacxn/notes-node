console.log('Starting App..');

const fs = require('fs');
const os = require('os');

let user = os.userInfo();

fs.appendFile('greenting.txt', `Hello ${user.username}!`);
