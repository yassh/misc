var arr = [];
for (var i = 0; i < 100; i++) {
  if (i == 0) {
    arr.push(0);
  } else if (i == 1) {
    arr.push(1);
  } else {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
}
console.log(arr);
