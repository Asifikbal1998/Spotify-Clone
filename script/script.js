console.log('welcome to spotify');
// initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterPlay');
let myPrgressBar = document.getElementById('myProgressBar');
let gitSongName = document.getElementById('gitSongName');
let songItem = Array.from(document.getElementsByClassName('song-item'));
// let songItemPlay =  Array.from(document.getElementsByClassName('songItemPlay'))

let songs = [
    { songName: 'Tuhi hai Asique', filePath: 'songs/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Tu kitni khubsurat hai', filePath: 'songs/2.mp3', coverPath: 'covers/2.jpg' },
    { songName: 'Tu jo hash hash sanam', filePath: 'songs/3.mp3', coverPath: 'covers/3.jpg' },
    { songName: 'Tu dua hai', filePath: 'songs/4.mp3', coverPath: 'covers/4.jpg' },
    { songName: 'Tujhko hai dulhan', filePath: 'songs/5.mp3', coverPath: 'covers/5.jpg' },
    { songName: 'Tujh se milne ki', filePath: 'songs/6.mp3', coverPath: 'covers/6.jpg' },
    { songName: 'Tu ja sori', filePath: 'songs/7.mp3', coverPath: 'covers/7.jpg' },
    { songName: 'A lamhai', filePath: 'songs/8.mp3', coverPath: 'covers/8.jpg' },
]

songItem.forEach((element, i) => {
    element.getElementsByClassName('bg-img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('song-title')[0].innerHTML = songs[i].songName;
})

// audioElement.play();

//handel the audio play/pause
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('bi-play-circle');
        masterplay.classList.add('bi-pause-circle');
        document.getElementById('gif').style.opacity = '1';

    }
    else {
        audioElement.pause();
        masterplay.classList.remove('bi-pause-circle');
        masterplay.classList.add('bi-play-circle');
        document.getElementById('gif').style.opacity = '0';
    }
})

// listen to event
audioElement.addEventListener('timeupdate', () => {
    //update the seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myPrgressBar.value = progress;
})
myPrgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myPrgressBar.value * audioElement.duration) / 100;
})

const makesAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('bi-pause-circle');
        element.classList.add('bi-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makesAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('bi-play-circle');
        e.target.classList.add('bi-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        gitSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('bi-play-circle');
        masterplay.classList.add('bi-pause-circle');
        document.getElementById('gif').style.opacity = '1';
    })
})

document.getElementById('forward').addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    gitSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('bi-play-circle');
    masterplay.classList.add('bi-pause-circle');
})
document.getElementById('backward').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    gitSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('bi-play-circle');
    masterplay.classList.add('bi-pause-circle');
})

// songItemPlay.addEventListener('click', () => {
//     // document.getElementById('gif').style.opacity = '1';
//     console.log('hi');
// })