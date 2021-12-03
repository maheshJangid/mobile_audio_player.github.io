let playList = document.querySelector(".playlist");
let optionDown = document.querySelector(".option");
let slide = document.querySelector("#slide");
let openPlayList = document.querySelector("#openlist");
let title = document.querySelector(".title");
let artist = document.querySelector(".artist");
let slider = document.querySelector("#slider");
let preBtn = document.querySelector("#pre");
let playBtn = document.querySelector("#play");
let nextBtn = document.querySelector("#next");
let trackImg = document.querySelector("img");
let showTime = document.querySelector("#currenttime");
let menu = document.querySelector(".fas");

let allSong = [
  {
    name: "First song",
    path: "music/BEAUZ+JVNA+Crazy+NCS+Release].mp3",
    image: "images/img1.jpg",
    artist: "Mr.shaif",
  },
  {
    name: "Second song",
    path: "music/song2.mp3",
    image: "images/img-2.jpg",
    artist: "Second artist",
  },
  {
    name: "Third song",
    path: "music/song1.mp3",
    image: "images/img-2.jpg",
    artist: "Third artist",
  },
];

openPlayList.addEventListener("click", function () {
  playList.classList.toggle("active2");
  openPlayList.classList.toggle("rotate");
});

slide.addEventListener("click", function () {
  optionDown.classList.toggle("active");
  slide.classList.toggle("rotate");
});

let track = document.createElement("audio");

let index = 0;
let playingSong = false;

let load = function () {
  track.src = allSong[index].path;
  title.textContent = allSong[index].name;
  trackImg.src = allSong[index].image;
  artist.textContent = allSong[index].artist;
};
playBtn.addEventListener("click", function () {
  load();
  track.play();
  if (playingSong == false) {
    playingSong = true;
    playBtn.innerHTML = "<i class='fas fa-pause'></i>";
    trackImg.classList.add("anime");
    track.play();
  } else {
    playingSong = false;
    playBtn.innerHTML = "<i class='fas fa-play'></i>";
    trackImg.classList.remove("anime");
    track.pause();
  }
  // Handle all activities

  track.addEventListener("timeupdate", (event) => {
    const { currentTime, duration } = event.srcElement;
    console.log(currentTime);
    let currentTimer = (currentTime / duration) * 100;
    slider.style.width = `${currentTimer}%`;

    const min_time = Math.floor(currentTime / 60);
    const sec_time = Math.floor(currentTime % 60);
    showTime.textContent = `0${min_time}:${sec_time}`;
  });
});
nextBtn.addEventListener("click", function () {
  load();
  track.play();
  if (index == allSong.length - 1) {
    index = 0;
  } else {
    index++;
  }
});

preBtn.addEventListener("click", function () {
  index--;
  load();
  if (index < 0) {
    index = allSong.lenght - 1;
  }
});
