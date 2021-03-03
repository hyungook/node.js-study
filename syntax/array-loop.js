// Array & Loop
var number = [ 1, 400, 12, 34, 5 ];

var i = 0;
var total = 0;
while(i < number.length) {
    console.log(number[i]);
    total = total + number[i]
    i = i++;
}

console.log(`total : ${total}`);