var song = document.getElementById("song");
var icon = document.getElementById("icon");

icon.onclick = function () {
    if (song.paused) {
        song.play();
        icon.className = "iconfont icon-zanting"
    } else {
        song.pause();
        icon.className = "iconfont icon-24gl-play"
    }
}