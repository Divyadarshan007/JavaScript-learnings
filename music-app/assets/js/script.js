let songArr = [
    {
        id: "myplaylist",
        songName: "Aa Jao Meri Tamanna",
        songUrl: "./assets/songs/Aa-jao-meri-tamanna.m4a"
    },
    {
        id: "myplaylist",
        songName: "Beete Lamhe",
        songUrl: "./assets/songs/Beete-Lamhe.m4a"
    },
    {
        id: "myplaylist",
        songName: "You And Me",
        songUrl: "./assets/songs/You-and-me.mp3"
    },
    {
        id: "myplaylist",
        songName: "Dil Ko Tumse Pyaar Hua",
        songUrl: "./assets/songs/Dil-ko-tumse-pyaar-hua.m4a"
    },
    {
        id: "myplaylist",
        songName: "Ek Din Teri Raahon",
        songUrl: "./assets/songs/Ek-din-teri-raahon.m4a"
    },
    {
        id: "myplaylist",
        songName: "Saware",
        songUrl: "./assets/songs/saware.mp3"
    },
    {
        id: "myplaylist",
        songName: "Guzaarish",
        songUrl: "./assets/songs/Guzaarish.m4a"
    },
    {
        id: "myplaylist",
        songName: "Labon ko",
        songUrl: "./assets/songs/Labon-ko.m4a"
    },
    {
        id: "myplaylist",
        songName: "Soniye",
        songUrl: "./assets/songs/Soniye.m4a"
    },
    {
        id: "myplaylist",
        songName: "Yoon Shabnami",
        songUrl: "./assets/songs/Yoon-Shabnami.m4a"
    },
    {
        id: "lofisong",
        songName: "Die With A Smile",
        songUrl: "./assets/songs/Die-With-A-Smile.mp3"
    },
    {
        id: "lofisong",
        songName: "Hua Main x Finding Her",
        songUrl: "./assets/songs/Hua-Main-x-Finding-Her.mp3"
    },
    {
        id: "lofisong",
        songName: "Samjho Na X Wishes",
        songUrl: "./assets/songs/Samjho-Na-X-Wishes.mp3"
    },
    {
        id: "lofisong",
        songName: "Saudebaazi",
        songUrl: "./assets/songs/Saudebaazi.mp3"
    },
    {
        id: "lofisong",
        songName: "Zara Zara",
        songUrl: "./assets/songs/Zara-Zara.mp3"
    },
    {
        id: "indiesong",
        songName: "Gulab",
        songUrl: "./assets/songs/Gulaab.mp3"
    },
    {
        id: "indiesong",
        songName: "Akhiyaan",
        songUrl: "./assets/songs/Akhiyaan-Mitraz.mp3"
    },
    {
        id: "indiesong",
        songName: "Nadiyon Sa",
        songUrl: "./assets/songs/nadiyon-sa.m4a"
    },
    {
        id: "indiesong",
        songName: "Finding Her",
        songUrl: "./assets/songs/Finding-Her.mp3"
    },
    {
        id: "workout",
        songName: "Todun Taak",
        songUrl: "./assets/songs/todun-taak.m4a"
    },
    {
        id: "workout",
        songName: "Brothers Anthem",
        songUrl: "./assets/songs/Brothers-Anthem.mp3"
    },
    {
        id: "workout",
        songName: "Toofan",
        songUrl: "./assets/songs/Toofan.mp3"
    },
    {
        id: "workout",
        songName: "Azadi",
        songUrl: "./assets/songs/Azadi.mp3"
    },
    {
        id: "special",
        songName: "Ladki Badi Anjani Hai",
        songUrl: "./assets/songs/Ladki-Badi-Anjani-Hai.mp3"
    },
    {
        id: "special",
        songName: "Aankhein Khuli",
        songUrl: "./assets/songs/Aankhein-Khuli.mp3"
    },
    {
        id: "special",
        songName: "Andekhi Anjaani",
        songUrl: "./assets/songs/Andekhi-Anjaani.mp3"
    },
    {
        id: "special",
        songName: "Yeh Ladka Hai Allah",
        songUrl: "./assets/songs/Yeh-Ladka-Hai-Allah.mp3"
    },
    {
        id: "special",
        songName: "You Are My Soniya",
        songUrl: "./assets/songs/You-Are-My-Soniya.mp3"
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
let initial = true;
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
        initial = false;
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
    totalDuration.innerHTML = `${(Math.floor((song.duration % 3600) / 60)).toString().padStart(2, "0")}:${(Math.floor((song.duration % 3600) % 60)).toString().padStart(2, "0")}`
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
    if (e.key == " " && playBtn.querySelector("span").querySelector("i").classList.contains("bi-play-circle-fill")) {
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
            nextSong();
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
