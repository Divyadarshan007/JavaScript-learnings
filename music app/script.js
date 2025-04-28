let song = document.querySelector(".song");
let playBtn = document.querySelector(".play-btn");
let slider = document.querySelector(".slider")
isPlay = false;
let image = document.querySelector(".image").children

let time = document.querySelector(".current-time")
let totalDuration = document.querySelector(".duration")
let minute = document.querySelector(".min")
let second = document.querySelector(".sec")
let timer;


playBtn.querySelector("span").addEventListener("click", () => {
    if (playBtn.querySelector("span").querySelector("i").classList.contains("bi-play")) {
        song.play();
        playTheSong()
        playBtn.querySelector("span").querySelector("i").classList.remove("bi-play");
        playBtn.querySelector("span").querySelector("i").classList.add("bi-pause");
        image[0].style.animationPlayState = "running"
    } else {
        song.pause();
        playBtn.querySelector("span").querySelector("i").classList.remove("bi-pause");
        playBtn.querySelector("span").querySelector("i").classList.add("bi-play");
        image[0].style.animationPlayState = "paused"

    }
});

slider.max = song.duration

let songDurax = song.duration;



const playTheSong = () => {
    setInterval(() => {
        slider.value = song.currentTime;
        let min = Math.floor((songDurax % 3600) / 60)
        let sec = Math.floor((songDurax % 3600) % 60)
        min = min.toString().padStart(2, "0")
        sec = sec.toString().padStart(2, "0")
        minute.innerHTML = min;
        second.innerHTML = sec;

        if (song.currentTime == song.duration) {
            slider.value = 0;
            playBtn.querySelector("span").querySelector("i").classList.remove("bi-pause");
            playBtn.querySelector("span").querySelector("i").classList.add("bi-play");
            image[0].style.animation = "none"
        }
    }, 1000)
}



slider.onchange = function () {
    song.play();
    image[0].style.animationPlayState = "running"
    song.currentTime = slider.value;
    songDurax = slider.value;
    playBtn.querySelector("span").querySelector("i").classList.remove("bi-play");
    playBtn.querySelector("span").querySelector("i").classList.add("bi-pause");

}