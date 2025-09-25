let arrNum = [2, 43, 5, 34, 56, 12, 2, 23, 4, 6, 82, 29, 10, 2, 23, 65, 12, 93];

let k = Number(
  prompt("Hãy nhập 1 số nguyên để kiểm tra số lần xuất hiện trong mảng")
);
let count = 0;

for (const element of arrNum) {
  if (k === element) {
    count++;
  }
}

alert(`${k} đã xuất hiện ${count} lần trong mảng!`);
