var num;
num = Math.floor(Math.random() * (300 - 0 + 1)) - 150;
console.log(num);

function checkSign(num) {
    return (num > 0) ? "positive" : (num == 0) ? "zero" : "negative";
}
var str = checkSign(num);
console.log(str);