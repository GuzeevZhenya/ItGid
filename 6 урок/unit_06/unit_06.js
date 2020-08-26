//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

let out1 = document.querySelector('.out-1');


function t1() {

    let r1 = "";
    for (i = 1; i <= 3; i++) {
        r1 += "***";
        for (k = 1; k <= 1; k++) {
            r1 += "_";
        }
    }
    out1.innerHTML = r1;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>

let out2 = document.querySelector('.out-2');

function t2() {
    let r2 = "";
    for (i = 1; i <= 3; i++) {
        r2 += '<br>' + i + '<br>';
        for (k = 0; k < 3; k++) {
            r2 += "*_";
        }
    }
    out2.innerHTML = r2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
let out3 = document.querySelector('.out-3');

function t3() {
    let r3 = "";
    for (i = 0; i <= 3; i++) {
        r3 += '<br>';
        for (k = 0; k <= 2; k++) {
            r3 += '*' + '_';
        }
    }
    out3.innerHTML = r3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
let out4 = document.querySelector('.out-4');

function t4() {
    let r4 = "";
    for (i = 1; i <= 3; i++) {
        r4 += i + '_';
        for (k = 1; k <= 5; k++) {
            r4 += k + " ";
        }
    }
    out4.innerHTML = r4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
let out5 = document.querySelector(".out-5");

function t5() {
    let r5 = "";
    for (i = 0; i <= 3; i++) {
        r5 += "<br>";
        for (k = 0; k <= 5; k++) {
            if (k % 2 == 0) {
                r5 += 1;
            } else {
                r5 += 0;
            }
        }
    }
    out5.innerHTML = r5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>

//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
let out6 = document.querySelector(".out-6");

function t6() {
    let r6 = "";

    for (i = 0; i < 3; i++) {
        r6 += "<br>";
        for (k = 1; k <= 6; k++) {
            if (k % 2 != 0 && k % 3 != 0) {
                r6 += 1;
            } else if (k % 2 == 0 && k % 3 != 0) {
                r6 += 0;
            } else {
                r6 += "x";
            }
        }
    }
    out6.innerHTML = r6;
}

document.querySelector(".b-6").onclick = t6;

//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>

let out7 = document.querySelector('.out-7');

function t7() {
    let r7 = "";
    for (i = 0; i < 4; i++) {
        r7 += '<br>';
        for (k = 0; k <= i; k++) {
            r7 += "*";
        }
    }
    out7.innerHTML = r7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>

let out8 = document.querySelector('.out-8');

function t8() {
    let r8 = "";
    for (i = 0; i < 5; i++) {
        r8 += '<br>';
        for (k = i; k <= 4; k++) {
            r8 += "*";
        }
    }
    out8.innerHTML = r8;

}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>

let out9 = document.querySelector('.out-9');

function t9() {
    let r9 = "";
    for (i = 1; i <= 5; i++) {
        r9 += '<br>';
        for (k = 1; k <= i; k++) {
            r9 += k + " ";
        }
    }
    out9.innerHTML = r9;

}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>

let out10 = document.querySelector('.out-10');

function t10() {
    let r10 = "";
    for (i = 0; i < 5; i++) {
        r10 += "<br>";
        for (k = 1; k <= 10; k++) {
            if (i === 0 && k < 10) {
                r10 += "0";
            }
            r10 += (i * 10) + k + " ";
        }
    }
    out10.innerHTML = r10;
}

document.querySelector('.b-10').onclick = t10;