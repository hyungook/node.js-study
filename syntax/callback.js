// callback 

// function a() {
//     console.log('A');
// }
// a();

// 익명함수
// js 에서는 함수는 값이다.
var a = function () {
    console.log('A');
};
// a();

function slowFunc(callback) {
    // callback 파라미터는 a의 함수를 갖는다.
    callback();
};

slowFunc(a)