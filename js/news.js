var navbtn = document.getElementsByClassName("navbtn")[0];
var navbtnIcon = document.getElementsByClassName("navbtnIcon");
var nav = document.getElementsByTagName("nav")[0];

navbtn.onclick = function () {
  if (navbtn.classList.contains("is")) {
    navbtn.classList.remove("is");
    nav.style.transform = "translateX(-100%)";
  } else {
    navbtn.classList.add("is");
    nav.style.transform = "translateX(0)";
  }
};
