// Object Oriented Programming

// Q. 프로그래밍이란?
// 1. data
// 2. data를 처리하는 것

// array, object

let f = function f1() {
    console.log(1 + 1);
    console.log(1 + 2);
}

let a = [f];
a[0]();  // 실행

let o = {
    func: f
}
o.func();  // 실행

// console.log(f);
// f();

// let i = if(true) {console.log(1)};  // 값이 될 수 없다.
// let w = while(true) {console.log(1)}  // 값이 될 수 없다.