f123();
console.log('A');
console.log('Z');
console.log('B');
f123();
console.log('F');
console.log('C');
console.log('P');
console.log('J');
f123();
console.log('U');
console.log('A');
console.log('Z');
console.log('J');
console.log('I');
f123();
 
function f123(){
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
}

// 함수의 입력

console.log(Math.round(1.6)); //2
console.log(Math.round(1.4)); //1
 
function sum(first, second){ // parameter
  console.log(first+second);
}
 
sum(2,4); // argument


// 함수의 출력

console.log(Math.round(1.6)); //2
console.log(Math.round(1.4)); //1
 
function sum(first, second){ // parameter
  return first+second;
}
 
console.log(sum(2,4)); // argument