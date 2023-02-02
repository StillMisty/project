var navbtn = document.getElementsByClassName("navbtn");
var navbtnIcon = document.getElementsByClassName("navbtnIcon");
var nav = document.getElementsByTagName("nav")

navbtn[0].onclick = function () {
    if (navbtnIcon[0].classList.contains('is')) {
        navbtnIcon[0].classList.remove('is');
        navbtnIcon[1].classList.remove('is');
        navbtnIcon[2].classList.remove('is');
        nav[0].style.transform = "translateX(-100%)";
    } else {
        navbtnIcon[0].classList.add('is');
        navbtnIcon[1].classList.add('is');
        navbtnIcon[2].classList.add('is');
        nav[0].style.transform = "translateX(0)";
    }
}

