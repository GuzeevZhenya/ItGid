const one = document.querySelector('.one');
one.style.width = '150px';
one.style.paddingbottom = '40px';

//console.log(one.style);


one.classList.add('two');
one.classList.remove('three');

const toggle = document.querySelector('toggle');

toggle.onclick = function() {
    this.classList.toggle('three');
}





// const one = document.querySelector('.one');

// one.style.width = "150px";
// one.style.paddingBottom = "50px";

// //console.log(one.style);

// one.classList.add('two', "three"); //  
// one.classList.remove('three'); 

// const toggle = document.querySelector('.toggle');

// toggle.onclick = function(){
// 	this.classList.toggle ('three');
// }

// //атрибуты data
// console.log(one.getAttribute('data'));
// console.log(document.querySelector('link').getAttribute('href'));

// one.setAttribute('data-num',6);

// let gas = document.querySelectorAll('.gas');
// for(let i = 0; i < gas.length; i++){
// 	gas[i].onclick = function(){
// 		let gallons = document.querySelector('.gallons').value;
// 		let amout = this.getAttribute('data');
// 		console.log(gallons * amout);
// 	}
// }

// let a = document.createElement('div');
// a.innerHTML = "hello";
// a.classList.add('a');


// document.querySelector('.test').appendChild(a);

// console.log(a);