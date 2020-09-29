document.querySelector('.one').onclick = function(event) {
    console.log(event);
    console.log('click');
}


// document.querySelector('.two').onclick = function() {
//     console.log('click 2');
// }


document.querySelector('.two').ondblclick = () => {
    console.log('double');
}

document.querySelector('.two').oncontextMenu = () => {
    console.log('double');
    return false;
}

// let w = 75;
// document.querySelector('.two').mousemove = () => {
//     console.log('+');
//     document.querySelector('.three').style.width = w + 'px';
//     w++;
// }


// наведение 
document.querySelector('.two').onmouseenter = () => {
    console.log('+');
    document.querySelector('.three').style.background = 'red';
    console.log(1);
}

// убрал мышь с элемента
document.querySelector('.two').onmouseleave = () => {
    console.log('+');
    document.querySelector('.three').style.background = 'orange';
    console.log(1);
}

// Зажал мышь на элементе
document.querySelector('.two').onmousedown = () => {
    console.log('+');
    document.querySelector('.three').style.background = 'green';
    console.log(1);
}

// после того как зажал и отпустил
document.querySelector('.two').onmouseup = () => {
    console.log('+');
    document.querySelector('.three').style.background = 'blue';
    console.log(1);
}