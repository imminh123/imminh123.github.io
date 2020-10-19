const background = document.getElementById('background')
const thumbnail = document.getElementById('thumbnail')
const song = document.getElementById('song')

const songArtist = document.getElementsByClassName('song-artist')[0]
const songTitle = document.getElementsByClassName('song-title')[0]
const progressBar = document.getElementById('progress-bar')
const pPause = document.getElementById('play-pause')

let songs = [
    'https://data3.chiasenhac.com/downloads/2098/0/2097656-7b13c1ff/320/How%20You%20Like%20That%20-%20BlackPink.mp3',
    'https://data25.chiasenhac.com/stream2/2111/0/2110781-bb650ddb/320/Missing%20You%20-%20Phuong%20Ly_%20Tinle.mp3',
    'https://data20.chiasenhac.com/downloads/2074/0/2073390-14cdb95e/320/Death%20Bed%20-%20Powfu_%20Beabadoobee.mp3'
]

let thumbnails = [
    'https://data.chiasenhac.com/data/cover/123/122971.jpg',
    'https://data.chiasenhac.com/data/cover/126/125981.jpg',
    'https://data.chiasenhac.com/data/cover/118/117584.jpg'
]

let artists = ['Blackpink', 'Phương Ly, Tinle', 'Powfu, Beabadoobee']
let titles = ['How you like me', 'Missing you', 'Death bed']

let playing = true

pPause.onclick = playPause


function playPause() {
    if (playing) {
        pPause.src = './assets/icons/icons8-pause-64.png'

        song.play()
        playing = false
    } else {
        pPause.src = './assets/icons/icons8-play-64.png'

        song.pause()
        playing = true
    }
}

let songIndex = 0

function nextSong() {
    songIndex++
    // If the current index goes beyond the array length, reset to the first song
    if (songIndex >= songs.length)
        songIndex = 0

    song.src = songs[songIndex]
    thumbnail.src = thumbnails[songIndex]
    // background.src = thumbnails[songIndex]

    songArtist.innerHTML = artists[songIndex]
    songTitle.innerHTML = titles[songIndex]

    playing = true
    playPause()
}

function previousSong() {
    songIndex--
    // If the current index goes beyond the array length, reset to the first song
    if (songIndex < 0)
        songIndex = songs.length - 1

    song.src = songs[songIndex]
    thumbnail.src = thumbnails[songIndex]
    // background.src = thumbnails[songIndex]

    songArtist.innerHTML = artists[songIndex]
    songTitle.innerHTML = titles[songIndex]

    playing = true
    playPause()
}

// convert song.currentTime and song.duration into MM:SS format
function formatTime(seconds) {
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds - (min * 60))
    if (sec < 10) {
        sec = `0${sec}`
    }
    return `${min}:${sec}`
}

function updateProgressValue() {
    progressBar.max = song.duration
    progressBar.value = song.currentTime
    document.querySelector('.currentTime').innerHTML = formatTime(Math.floor(song.currentTime));
    if (document.querySelector('.durationTime').innerHTML === 'NaN:NaN') {
        document.querySelector('.durationTime').innerHTML = '0:00';
    } else {
        document.querySelector('.durationTime').innerHTML = formatTime(Math.floor(song.duration));
    }
}

setInterval(updateProgressValue, 500)

function changeProgressBar() {
    song.currentTime = progressBar.value
}

// const btn = document.getElementById('smt')
// btn.onclick = () => {
//     Swal.fire({
//         icon: 'question',
//         title: 'Enter your name',
//         input: 'text',
//         showCancelButton: true,
//         confirmButtonText: 'Done'

//     })
// }


const dialog = document.querySelector('.dialog-overview');
const openButton = dialog.nextElementSibling;
const closeButton = dialog.querySelector('sl-button[slot="footer"]');

openButton.addEventListener('click', () => dialog.show());
closeButton.addEventListener('click', () => dialog.hide());


console.log($())