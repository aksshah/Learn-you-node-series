const fs = require('fs');
let temp = fs.readFileSync(process.argv[2], 'utf8').split('\n');
let ans = temp.length - 1;
console.log(ans);