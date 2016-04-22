var a = 0;
var b = 1;
var c = a + b;
for (var i = 0; i < 100; i++) {
  console.log(a);
  a = b;
  b = c;
  c = a + b;
}
