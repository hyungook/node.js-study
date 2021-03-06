let fs = require('fs');

// readFilesync

// console.log('A');
// fs.readFileSync('syntax/sample.txt', 'utf8');
// console.log(result);
// console.log('C');

// ->  A, B, C



// readFile

console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result) {
    console.log(result);
});
console.log('C');

// A, C, B

