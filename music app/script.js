let songArr = [
    {
        songName: "Qatal",
        songUrl: "./songs/Qatal.mp3"
    },
    {
        songName: "Safety Off",
        songUrl: "./songs/Safety-Off.mp3"
    },
    {
        songName: "You And Me",
        songUrl: "./songs/You-and-me.mp3"
    },
    {
        songName: "Excuses",
        songUrl: "./songs/Excuses.mp3"
    },
    {
        songName: "Softly",
        songUrl: "./songs/Softly.mp3"
    },
    {
        songName: "saware",
        songUrl: "./songs/saware.mp3"
    }
]

let song = document.querySelector(".song");
let playBtn = document.querySelector(".play-btn");
let slider = document.querySelector(".slider");
isPlay = false;
let image = document.querySelector(".image").children;

let time = document.querySelector(".current-time");
let totalDuration = document.querySelector(".duration");
let minute = document.querySelector(".min");
let second = document.querySelector(".sec");
let timer;
let rightBtn = document.querySelector(".right-btn");
let leftBtn = document.querySelector(".left-btn");

const playSong = () => {
    song.play();
    playTheSong();
    playBtn.querySelector("span").querySelector("i").classList.remove("bi-play");
    playBtn.querySelector("span").querySelector("i").classList.add("bi-pause");
    image[0].style.animationPlayState = "running";
    totalDuration.innerHTML = `${Math.floor((song.duration % 3600) / 60)}:${Math.floor((song.duration % 3600) % 60)}`
}

const pauseSong = () => {
    song.pause();
    playBtn.querySelector("span").querySelector("i").classList.remove("bi-pause");
    playBtn.querySelector("span").querySelector("i").classList.add("bi-play");
    image[0].style.animationPlayState = "paused"
}
playBtn.querySelector("span").addEventListener("click", () => {
    if (playBtn.querySelector("span").querySelector("i").classList.contains("bi-play")) {
        playSong();
    } else {
        pauseSong();
    }
});

let songIdx = 0;
const nextSong = () => {
    songIdx = (songIdx + 1) % songArr.length;
    song.src = `${songArr[songIdx].songUrl}`
    playSong();
    
}
const prevSong = () => {
    songIdx = ((songIdx - 1) + songArr.length) % songArr.length;
    song.src = `${songArr[songIdx].songUrl}`
    playSong();
}
rightBtn.querySelector("span").addEventListener("click", () => {
    nextSong();
})

leftBtn.querySelector("span").addEventListener("click", ()=>{
    prevSong();
})

slider.max = song.duration
const playTheSong = () => {
    setInterval(() => {
        slider.value = song.currentTime;
        let min = Math.floor((song.currentTime % 3600) / 60);
        let sec = Math.floor((song.currentTime % 3600) % 60);
        min = min.toString().padStart(2, "0");
        sec = sec.toString().padStart(2, "0");
        minute.innerHTML = min;
        second.innerHTML = sec;

        if (song.currentTime == song.duration) {
            slider.value = 0;
            playBtn.querySelector("span").querySelector("i").classList.remove("bi-pause");
            playBtn.querySelector("span").querySelector("i").classList.add("bi-play");
            image[0].style.animation = "none";
        }
    }, 1000)
}

slider.onchange = function () {
    song.play();
    image[0].style.animationPlayState = "running";
    song.currentTime = slider.value;
    songDurax = slider.value;
    playBtn.querySelector("span").querySelector("i").classList.remove("bi-play");
    playBtn.querySelector("span").querySelector("i").classList.add("bi-pause");

}