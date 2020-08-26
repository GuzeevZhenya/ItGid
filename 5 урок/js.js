// let div = document.querySelectorAll('.one'); //первый элемент на странице
// console.log(div);
// //div.style.background = 'red';

// for(let i = 0; i < div.length; i++){
// console.log(div[i]);
// 	div[i].style.background = 'red';
// 	div[i].onclick = two; 
// }


// function two(){
// 	console.log('work');
// }


document.querySelector('button').onclick = () =>{
	let r = document.querySelectorAll('input[type="radio"]');
	console.log(r);
	for(let i =0; i<r.length;i++){
		if(r[i].checked){
			console.log(r[i].value);
		}
	}
};


let out = '';
for(let i = 0; i<10; i++){
 out += i + ' ';
}

document.querySelector('#out').innerHTML = out;