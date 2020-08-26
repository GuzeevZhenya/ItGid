// let a = "Иван";
// let b = '37';
// let z7 = "Овен";
// let c = ['Иван', 37, 'Овен'];
// let d = [];
// console.log(c[0]);
// console.log(c[1]);

let a = [1, 2, 3, 4];
console.log(a);

let t = a[0];
a[0] = a[a.length - 1];
a[a.length - 1] = t;

console.log(a);
console.log(a[888]);


// for (i = 0; i < a.length; i++) {
//     document.querySelector('.out-1').innerHTML += a[1] + " ";
// }


let out = ' ';
for (let i = 0; i < a.length; i++) {
    out += a[i] + '_ _';
}
document.querySelector('.out-1').innerHTML = out;
//max
let b = [4, 2, 3, 4, 1, 2, 12, 342, 32, 1234, 2];
let max = b[0];
for (i = 0; i < b.length; i++) {
    if (b[i] > max) {
        max = b[i];
    }
}

//sum

let sum = 0;
for (let i = 0; i < b.length; i++) {
    sum = sum + b[i];
}

console.log('sum' + sum);