console.log("start");

console.log("start 2");
setTimeout(() => {
  console.log("settimeout");
}, 2000);
setTimeout(() => {
  console.log("settimeout 0");
}, 0);
setTimeout(() => {
  console.log("settimeout 0");
});
console.log("end");
