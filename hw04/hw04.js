let randomNum = prompt("Hãy nhập vào dãy số bất kỳ");
let arrNum = randomNum.split("");
let newArr = arrNum.sort();
console.log(newArr);

alert(newArr[newArr.length-1]);