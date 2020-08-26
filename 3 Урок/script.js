let a = 6;

// if (a > 9) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

const button = document.querySelector("button");
const input = document.querySelector(".age");

// () => стрелочная функция
button.onclick = () => {
  let num = +input.value;
  if (num >= 16 && num <= 60) {
    console.log("Welcome!!");
  } else if (num > 60) {
    console.log("ha");
  } else {
    console.log("Рано");
  }

  switch (num) {
    case 15:
      console.log("Еще рано");
      break;

    case 16:
      console.log("ура");
      break;

    default:
      console.log("ok");
  }
};

let b = 3;
console.log(b > 3 || b < 7); //&& - и || - или
