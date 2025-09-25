let arrNum = [
  2, 43, 5, 34, 56, 12, 67, 23, 4, 6, 82, 29, 10, 45, 23, 65, 12, 93,
];
console.log(arrNum);

let tongSoChan = 0;
let tongSoLe = 0;

for (const element of arrNum) {
  if (element % 2 !== 0) {
    tongSoLe += element;
  } else {
    tongSoChan += element;
  }
}

alert(`Tổng các số chẵn bằng ${tongSoChan}
  Tổng các số lẻ bằng ${tongSoLe}`);
