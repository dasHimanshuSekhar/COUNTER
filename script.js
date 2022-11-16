var bt1 = document.getElementById('btn1');
var bt2 = document.getElementById('btn2');
var cntr = document.getElementById('counter');

var cnt = 1;
bt1.addEventListener('click', count);
bt2.addEventListener('click', reset);

function reset(){
    cntr.innerHTML = 0 + " ";
    cnt = 1;
}

function count(){
    cntr.innerHTML = cnt + " ";
    cnt ++;
}
