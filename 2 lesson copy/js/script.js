let a = 1;

// if (a > 9) {
// 	console.log('yes');
// }

// else {
// 	console.log("else");
// }

const button = document.querySelector("button");
const input = document.querySelector(".age");

// () => стрелочня функция
button.onclick = () => {
	let num = +input.value;
	if (num >= 16 && num < 60) {
		console.log("Welcome");
	}

	else if (num > 60) {
		console.log("Ты точно сюда");
	}

	else {
		console.log("Ты не пройдешь");
	}

	switch (num) {
		case 15:
			console.log("poterpi")
			break;

		case 16:
			console.log('ypaaaa');
			break;

		default:
			console.log("pocka");
	}
}
let b = 5;

console.log(b !== 7);
