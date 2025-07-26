var label = document.getElementsByTagName("label");
var word = document.getElementsByClassName("word");
var bg = document.getElementById("bg");

const bgImages = [
  "amiya.png",
  "kaierxi.png",
  "hong.png",
  "chen.png",
  "xingxiong.png",
  "yeying.png",
  "huang.png",
  "baimianxiao.png",
  "dekesasi.png",
  "nengtianshi.png",
];

for (let i = 0; i < label.length && i < bgImages.length; i++) {
  label[i].onclick = function () {
    bg.style.backgroundImage = `url(./img/official/bg/${bgImages[i]})`;
    for (let j = 0; j < word.length; j++) {
      word[j].style.display = "none";
    }
    if (word[i]) word[i].style.display = "block";
  };
}
