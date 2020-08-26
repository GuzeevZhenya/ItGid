let a = 6;
let b = "hello";

console.log(a);

let inputIn = document.querySelector(".input-in"); //input
let button = document.querySelector("button");
let out = document.querySelector(".out");

button.onclick = function () {
  // кнопка будет нажата

  console.log("Pabotaet");
  //console.log(inputIn.value); //value - то, что введено в input
  let b = +inputIn.value; // выводится все в ввиде строки, а + переводит в число
  console.log(b * 2); // '66' + 10 = 6610
  out.innerHTML = b;

  inputIn.value = ""; // очищает значения внутри input
};
