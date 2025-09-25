let arr = [3, 5, 6, 2, 8, 11, 13];
console.log(arr);

let num = Number(prompt("Hãy nhập bạn số dự đoán"));
let bingoNum = arr.includes(num);

if (bingoNum === true) {
  alert("Bingo!");
} else {
  alert("Chúc bạn may mắn lần sau!");
}
