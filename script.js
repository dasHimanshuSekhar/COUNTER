"use strict";
var bt1 = document.getElementById('btn1');
var bt2 = document.getElementById('btn2');
var cntr = document.getElementById('counter');

var cnt = 1;
bt1.addEventListener('click', count);
bt2.addEventListener('click', reset);

function reset(){
    cnt = 0;
    count();
}

function count(){
    cntr.innerHTML = cnt + " ";
    cnt ++;
}
