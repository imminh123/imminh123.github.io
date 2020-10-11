var musicList = [
	{
		cover: "../image/Someone's Satellite - I am, I was/cover.jpg",
		Name: "Welcome To The Rubbish Dump",
		artist: "ばらっげ",
		songUrl:
			"../image/Someone's Satellite - I am, I was/01. Welcome To The Rubbish Dump.mp3",
	},
	{
		cover: "../image/Someone's Satellite - I am, I was/cover.jpg",
		Name: "Friend with Scraps",
		artist: "ばらっげ",
		songUrl:
			"../image/Someone's Satellite - I am, I was/02. Friend with Scraps.mp3",
	},
	{
		cover: "../image/Someone's Satellite - I am, I was/cover.jpg",
		Name: "Battleships",
		artist: "ばらっげ",
		songUrl: "../image/Someone's Satellite - I am, I was/03. Battleships.mp3",
	},
	{
		cover: "../image/Someone's Satellite - I am, I was/cover.jpg",
		Name: "Move, Move, Move",
		artist: "ばらっげ",
		songUrl:
			"../image/Someone's Satellite - I am, I was/04. Move, Move, Move.mp3",
	},
	{
		cover: "../image/Someone's Satellite - I am, I was/cover.jpg",
		Name: "I am, I was",
		artist: "ばらっげ",
		songUrl: "../image/Someone's Satellite - I am, I was/05. I am, I was.mp3",
	},
	{
		cover: "../image/Someone's Satellite - I am, I was/cover.jpg",
		Name: "Welcome To The Rubbish Dump",
		artist: "ばらっげ",
		songUrl:
			"../image/Someone's Satellite - I am, I was/01. Welcome To The Rubbish Dump.mp3",
	},
	{
		cover: "../image/Someone's Satellite - I am, I was/cover.jpg",
		Name: "Friend with Scraps",
		artist: "ばらっげ",
		songUrl:
			"../image/Someone's Satellite - I am, I was/02. Friend with Scraps.mp3",
	},
	{
		cover: "../image/Someone's Satellite - I am, I was/cover.jpg",
		Name: "Battleships",
		artist: "ばらっげ",
		songUrl: "../image/Someone's Satellite - I am, I was/03. Battleships.mp3",
	},
	{
		cover: "../image/Someone's Satellite - I am, I was/cover.jpg",
		Name: "Move, Move, Move",
		artist: "ばらっげ",
		songUrl:
			"../image/Someone's Satellite - I am, I was/04. Move, Move, Move.mp3",
	},
	{
		cover: "../image/Someone's Satellite - I am, I was/cover.jpg",
		Name: "I am, I was",
		artist: "ばらっげ",
		songUrl: "../image/Someone's Satellite - I am, I was/05. I am, I was.mp3",
	},
	{
		cover: "../image/Someone's Satellite - I am, I was/cover.jpg",
		Name: "Welcome To The Rubbish Dump",
		artist: "ばらっげ",
		songUrl:
			"../image/Someone's Satellite - I am, I was/01. Welcome To The Rubbish Dump.mp3",
	},
	{
		cover: "../image/Someone's Satellite - I am, I was/cover.jpg",
		Name: "Friend with Scraps",
		artist: "ばらっげ",
		songUrl:
			"../image/Someone's Satellite - I am, I was/02. Friend with Scraps.mp3",
	},
	{
		cover: "../image/Someone's Satellite - I am, I was/cover.jpg",
		Name: "Battleships",
		artist: "ばらっげ",
		songUrl: "../image/Someone's Satellite - I am, I was/03. Battleships.mp3",
	},
	{
		cover: "../image/Someone's Satellite - I am, I was/cover.jpg",
		Name: "Move, Move, Move",
		artist: "ばらっげ",
		songUrl:
			"../image/Someone's Satellite - I am, I was/04. Move, Move, Move.mp3",
	},
	{
		cover: "../image/Someone's Satellite - I am, I was/cover.jpg",
		Name: "I am, I was",
		artist: "ばらっげ",
		songUrl: "../image/Someone's Satellite - I am, I was/05. I am, I was.mp3",
	},
];

let songs = $(".songs");
let song = $(".song");

function renderMusic(array) {
	let songListRender = "";

	for (let i = 0; i < array.length; i++) {
		let name = array[i].Name;
		let artist = array[i].artist;
		let songUrl = array[i].songUrl;
		let cover = array[i].cover;

		songListRender += `<div class="song" data-songUrl="${songUrl}" data-name="${name}" data-artist="${artist}" data-cover="${cover}">
	<img
		class="songCover"
		src="${cover}"
		alt=""
	/>
	
	<div class="songIn4">
		<!-- song's name -->
		<h6 class="songName">${name}</h6>
		<!-- artist's name -->
		<h6 class="songArtist">${artist}</h6>
	</div>
	
	<div class="subContent">
	<h6 class="time">4:46</h6>
		
	</div>
	
	</div>`;
	}

	songs.html(songListRender);
}

renderMusic(musicList);