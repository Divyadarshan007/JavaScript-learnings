let songArr = [
    {
        id: "tophit",
        songName: "Qatal",
        songUrl: "./songs/Qatal.mp3"
    },
    {
        id: "tophit",
        songName: "Safety Off",
        songUrl: "./songs/Safety-Off.mp3"
    },
    {
        id: "tophit",
        songName: "You And Me",
        songUrl: "./songs/You-and-me.mp3"
    },
    {
        id: "tophit",
        songName: "Excuses",
        songUrl: "./songs/Excuses.mp3"
    },
    {
        id: "tophit",
        songName: "Softly",
        songUrl: "./songs/Softly.mp3"
    },
    {
        id: "tophit",
        songName: "Saware",
        songUrl: "./songs/saware.mp3"
    },
    {
        id: "lofisong",
        songName: "Die With A Smile",
        songUrl: "./songs/Die-With-A-Smile.mp3"
    },
    {
        id: "lofisong",
        songName: "Hua Main x Finding Her",
        songUrl: "./songs/Hua-Main-x-Finding-Her.mp3"
    },
    {
        id: "lofisong",
        songName: "Samjho Na X Wishes",
        songUrl: "./songs/Samjho-Na-X-Wishes.mp3"
    },
    {
        id: "lofisong",
        songName: "Saudebaazi",
        songUrl: "./songs/Saudebaazi.mp3"
    },
    {
        id: "lofisong",
        songName: "Zara Zara",
        songUrl: "./songs/Zara-Zara.mp3"
    },
    {
        id: "indiesong",
        songName: "Gulab",
        songUrl: "./songs/Gulaab.mp3"
    },
    {
        id: "indiesong",
        songName: "Akhiyaan",
        songUrl: "./songs/Akhiyaan-Mitraz.mp3"
    },
    {
        id: "indiesong",
        songName: "Nadiyon Sa",
        songUrl: "./songs/nadiyon-sa.m4a"
    },
    {
        id: "indiesong",
        songName: "Finding Her",
        songUrl: "./songs/Finding-Her.mp3"
    },
    {
        id: "workout",
        songName: "Todun Taak",
        songUrl: "./songs/todun-taak.m4a"
    },
    {
        id: "workout",
        songName: "Brothers Anthem",
        songUrl: "./songs/Brothers-Anthem.mp3"
    },
    {
        id: "workout",
        songName: "Toofan",
        songUrl: "./songs/Toofan.mp3"
    },
    {
        id: "workout",
        songName: "Azadi",
        songUrl: "./songs/Azadi.mp3"
    },

]

let song = document.querySelector(".song");
let playBtn = document.querySelector(".play-btn");
let slider = document.querySelector(".slider");
isPlay = false;
let time = document.querySelector(".current-time");
let totalDuration = document.querySelector(".duration");
let minute = document.querySelector(".min");
let second = document.querySelector(".sec");
let timer;
let rightBtn = document.querySelector(".right-btn");
let leftBtn = document.querySelector(".left-btn");
let songIdx = 0;
let songList = document.querySelector(".song-list");
let songDuration;
let songName = document.getElementById("song-name");

let cards = document.querySelectorAll(".card2")

songArr.forEach((item) => {
    songList.innerHTML += `
        <li class="song-item" data-name="${item.id}">
          <span class="song-name">${item.songName}</span>
          <i class="bi bi-soundwave playing-icon"></i>
        </li>
    `
})

const thisSong = (idx) => {
    isPlay = false;
    songIdx = idx;
    playSong()

}
let songItem = document.querySelectorAll(".song-item");
songItem.forEach((item, idx) => {
    item.addEventListener("click", (e) => {
        songItem.forEach((item) => {
            item.classList.remove("active")
        })
        thisSong(idx);
        item.classList.add("active")
    })
})

cards.forEach((card) => {
    card.addEventListener("click", () => {
        songItem.forEach((item) => {
            item.classList.add("hide")
            if (card.dataset.name == item.dataset.name)
                item.classList.remove("hide")
        })
    })
})

const playSong = () => {
    if (isPlay) {
        song.play();
        playBtn.querySelector("span").querySelector("i").classList.remove("bi-play-circle-fill");
        playBtn.querySelector("span").querySelector("i").classList.add("bi-pause-circle-fill");
        // isPlay = false;
    } else {
        song.src = `${songArr[songIdx].songUrl}`
        song.play();
        playTheSong();
        playBtn.querySelector("span").querySelector("i").classList.remove("bi-play-circle-fill");
        playBtn.querySelector("span").querySelector("i").classList.add("bi-pause-circle-fill");
        songItem.forEach((item) => {
            item.classList.remove("active")
        })
        songItem[songIdx].classList.add("active")
        songName.innerHTML = songArr[songIdx].songName
    }

}
song.addEventListener("loadedmetadata", () => {
    totalDuration.innerHTML = `${Math.floor((song.duration % 3600) / 60)}:${Math.floor((song.duration % 3600) % 60)}`
    slider.max = song.duration;
    songDuration = song.duration;
})
const pauseSong = () => {
    isPlay = true;
    song.pause();
    playBtn.querySelector("span").querySelector("i").classList.remove("bi-pause-circle-fill");
    playBtn.querySelector("span").querySelector("i").classList.add("bi-play-circle-fill");
}
playBtn.querySelector("span").addEventListener("click", () => {
    if (playBtn.querySelector("span").querySelector("i").classList.contains("bi-play-circle-fill")) {
        playSong();
    } else {
        pauseSong();
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 32 && playBtn.querySelector("span").querySelector("i").classList.contains("bi-play-circle-fill")) {
        playSong()
    } else {
        pauseSong()
    }
})

const nextSong = () => {
    songIdx = (songIdx + 1) % songArr.length;
    playSong();
}
const prevSong = () => {
    songIdx = ((songIdx - 1) + songArr.length) % songArr.length;
    playSong();
}
rightBtn.querySelector("span").addEventListener("click", () => {
    nextSong();
})
leftBtn.querySelector("span").addEventListener("click", () => {
    prevSong();
})

const playTheSong = () => {
    clearInterval(timer);
    timer = setInterval(() => {
        slider.value = song.currentTime;
        let min = Math.floor((song.currentTime % 3600) / 60);
        let sec = Math.floor((song.currentTime % 3600) % 60);
        min = min.toString().padStart(2, "0");
        sec = sec.toString().padStart(2, "0");
        minute.innerHTML = min;
        second.innerHTML = sec;

        if (song.ended) {
            clearInterval(timer)
            slider.value = 0;
            playBtn.querySelector("span").querySelector("i").classList.remove("bi-pause-circle-fill");
            playBtn.querySelector("span").querySelector("i").classList.add("bi-play-circle-fill");
        }
    }, 1000)
}

slider.addEventListener("change", () => {
    playSong();
    song.currentTime = slider.value;
    let min = Math.floor((song.currentTime % 3600) / 60);
    let sec = Math.floor((song.currentTime % 3600) % 60);
    min = min.toString().padStart(2, "0");
    sec = sec.toString().padStart(2, "0");
    minute.innerHTML = min;
    second.innerHTML = sec;
})
