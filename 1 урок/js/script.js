console.log("hello"); //строка
console.log("world");
console.log("3333");
console.log(233);
console.log("hello" + " world");
console.info("hello");

document.getElementById("out").innerHTML = 222;
document.querySelector(".header").innerHTML = 333; //возьмет первый элемент
document.querySelector("#one").innerHTML = "Hello"; //есть #
document.getElementById("one").innerHTML = 777; //нет #

let a; // var a - устарело
a = document.querySelector("#one"); //внутри 'а' получил параграф
let c = document.querySelector(".header");

a.innerHTML = 9999;
c.innerHTML = 6666;
