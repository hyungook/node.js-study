const testFolder = './data';
const fs = require('fs');

// fs.readdir(testFolder, (err, files) => {
//     files.forEach(file => {
//         console.log(file);
//     });
// })
fs.readdir(testFolder,function(error, fileList) {
    console.log(fileList);
})