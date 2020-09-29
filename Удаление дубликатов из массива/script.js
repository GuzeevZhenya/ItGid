const arr = [1, 2, 3, 4, 5, 2, 1, 2, 3, 12, 3];
console.log(arr);


//1

// let a1 = [...new Set(arr)];

//2
let a1 = Array.from(new Set(arr));
console.log(a1);
//3
let a2 = arr.filter((item, index) => {
    return arr.indexOf(item) === index; // Если поставить !==index, то выведет все дубляжи
})
console.log(a2);

//4 
let a3 = arr.reduce((result, item) => {
    return result.unclueds(item) ? result : [...result, item];
}, []);

console.log(a3);