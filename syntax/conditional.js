var args = process.argv;
console.log(args);
// $ node syntax/conditional.js oho
// 출력값
// '/usr/local/bin/node',
// '/Users/ohhyungook/Desktop/오형욱/nodejs/web2_nodejs/syntax/conditional.js',
// 'oho'
console.log(args[2]);


console.log('A');
console.log('B');
if(args[2] === '1'){
    // true 실행
  console.log('C1');
} else {
    // false 실행
  console.log('C2');
}
console.log('D');