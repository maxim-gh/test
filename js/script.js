let header = document.querySelector('.header');
let active = document.querySelector('.wrap');

header.onmousedown = function (event){
    active.style.position = 'absolute';

    function move (event){
        active.style.left = event.clientX - active.offsetWidth / 2 + 'px';
        active.style.top = event.clientY + 'px';
    }
    document.onmousemove = function (event){
        move(event);
    }
    move(event);
    active.classList.add('active');

    active.onmouseup = function (){
        document.onmousemove = null;
        active.onmouseup = null;
        active.classList.remove('active');
    }


}