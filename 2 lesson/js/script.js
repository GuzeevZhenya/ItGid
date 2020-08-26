
let inputIn = document.querySelector('.input-in');   // input
let button = document.querySelector('button');  //button
let out = document.querySelector('.out'); //то куда будет выводится результат


button.onclick = function () {
	//console.log(inputIn.value);  // value то, что введенно в input
	let b = inputIn.value; // записывается значение в переменную b введенное в input 
	console.log(b); // вывод результатов
	out.innerHTML = b;  //записываем в див с классом out значения b
	inputIn.value = ""; // чистим input (должен быть в самом коце)
}