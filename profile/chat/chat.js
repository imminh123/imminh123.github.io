var chatContent = [
	[
		{
			name: "b",
			content: "chào",
		},
		{
			name: "a",
			content: "chào cc",
		},
		{
			name: "b",
			content: "mai 6h r6s",
		},
		{
			name: "a",
			content: "mai sủi làm chó",
		},
		{
			name: "a",
			content: "ok?",
		},
	],
	[
		{
			name: "b",
			content: "alo alo",
		},
		{
			name: "a",
			content: "lô cc",
		},
		{
			name: "b",
			content: "mai 6h burger king",
		},
		{
			name: "a",
			content: "để sủi như lần trc ý hả",
		},
		{
			name: "a",
			content: "???",
		},
	],
	[
		{
			name: "b",
			content: "6h?",
		},
		{
			name: "a",
			content: "chỗ  cũ??",
		},
		{
			name: "b",
			content: "chứ còn chỗ nào à??",
		},
		{
			name: "a",
			content: "bao thì t đi",
		},
		{
			name: "a",
			content: "đang kẹt",
		},
	],
	[
		{
			name: "b",
			content: "solo yasuo ko e",
		},
		{
			name: "a",
			content: "??",
		},
		{
			name: "b",
			content: "sợ à, non thế",
		},
		{
			name: "a",
			content: "m có bao giờ có tuổi à",
		},
		{
			name: "a",
			content: "kèo 6h??",
		},
	],
	[
		{
			name: "b",
			content: "coop ko e",
		},
		{
			name: "a",
			content: "thôi lạy m, 2 quả tạ là đủ r",
		},
		{
			name: "b",
			content: "??",
		},
		{
			name: "a",
			content: "bọn m non vkl",
		},
		{
			name: "a",
			content: "đhs vô vừa đụng mặt boss đã đến số cả lũ :))",
		},
	],
];

var inboxList = [
	{
		name: "tplinh",
		profileImg:
			"https://www.pngitem.com/pimgs/m/515-5151208_powerpuffgirls-bubbles-powerpuff-girls-bubbles-hd-png-download.png",
		time: "14:06",
		realName: "Phương Linh",
	},
	{
		name: "khnhlinhng",
		profileImg:
			"https://i.pinimg.com/originals/85/11/6f/85116ff6090e8956e9b5655027dae545.jpg",
		time: "14:07",
		realName:"Khánh Linh",
	},
	{
		name: "ngtllll",
		profileImg:
			"https://am22.mediaite.com/tms/cnt/uploads/2019/12/olaf-frozen.jpg",
		time: "14:08",
		realName: "Nguyễn Thành Lâm"
	},
	{
		name: "pnpuynn",
		profileImg:
			"https://i.pinimg.com/originals/4a/d0/1d/4ad01dec05b1f592066e9d78b9fc6762.jpg",
		time: "14:09",
		realName: "Pham Ngoc Phuong Uyen",
	},
	{
		name: "viethhung",
		profileImg:
			"https://vignette.wikia.nocookie.net/phineasandferb/images/c/ca/Profile_-_Ferb_Fletcher.PNG/revision/latest/top-crop/width/360/height/360?cb=20200401182236",
		time: "14:10",
		realName: "Việt Hùng",
	},
];

let conversationContent = $(".conversation-content");
let searchArray = inboxList;

let chat = $("#chatInput");
function renderMusic(array) {
	let chatRender = "";

	for (let i = 0; i < array.length; i++) {
		let name = array[i].name;
		let content = array[i].content;

		chatRender += `<div class="person-${name}">
    
    <p class="person-a-text">${content}  </p>
</div>`;
	}

	conversationContent.html(chatRender);
}

renderMusic(chatContent[1]);

// console.log(chat.target);

let chatInput = $("#chatInput");

// renderMusic(chatContent);

function renderProfile(array) {
	let profileRender = "";

	for (let i = 0; i < array.length; i++) {
		let name = array[i].name;
		let profileImg = array[i].profileImg;
		let time = array[i].time;
		let lastMessage = chatContent[i][chatContent[i].length-1].content;

		profileRender += `<div class="inbox" ">
		<img class="person-ava-img"
				src= ${profileImg}
				alt="">
		<div class="personal-inbox-info">
				<div class="person-and-message">
						<p class="person-user-name">${name}</p>
						<p class="message"> ${lastMessage}</p>
				</div>

				<p class="message-time">${time}</p>

		</div>
</div>`;
	}

	$("#inboxList").html(profileRender);
}

renderProfile(inboxList);
let inbox = $(".inbox");
console.log(inbox);
let a = 0;
for (let i = 0; i < inboxList.length; i++) {
	inbox[i].addEventListener("click", function (e) {
		renderMusic(chatContent[i]);
		let personRender1 = "";
		let name = inboxList[i].name;
		let profileImg = inboxList[i].profileImg;
		personRender1 += `<img class="person-chatting-ava-img"
		src="${profileImg}" alt="">
<div class="person-name-active">
		<p class="person-chatting-name">${name}</p>
		<p class="active">online</p>
</div>

<div class="call-icons">

</div>`;

$(".person-chatting-topbar").html(personRender1);

let personRender2 ="";
let realName = inboxList[i].realName;

personRender2 += `<img class="person-profile-ava-img"
src="${profileImg}" alt="">
<p class="person-name-user">${name}</p>
<p class="person-real-name">${realName}</p>`;

$(".top-profile-set").html(personRender2);

let personRender3 = "";
personRender3 += `<p class="person-playlist-text"> ${name}'s playlist</p>
<div class="see-all-person-playlist">
		<p class="see-all-person-playlist-text">See all </p>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330"
				style="enable-background:new 0 0 330 330;" xml:space="preserve">
				<path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
C255,161.018,253.42,157.202,250.606,154.389z" />
		</svg>
</div>`;

$(".person-playlist-top-content").html(personRender3);

let personRender4 = "";
personRender4 += `<p class="person-photo-text"> ${name}'s photos</p>
<div class="see-all-person-photo">
		<p class="see-all-person-photo-text">See all </p>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330"
				style="enable-background:new 0 0 330 330;" xml:space="preserve">
				<path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
C255,161.018,253.42,157.202,250.606,154.389z" />
		</svg>
</div>`;

$(".person-photo-top-content").html(personRender4);

		return (a = i);
	});

	
	document
		.querySelector("#chatInput")
		.addEventListener("keypress", function (e) {
			if (e.key === "Enter") {
				let inputVal = $("#chatInput").val();

				console.log(inputVal);
				if (i == a) {
					chatContent[a].push({
						name: "b",
						content: inputVal,
					});
					renderMusic(chatContent[a]);
					console.log(inputVal);
					$("#chatInput").val("");
					// code for enter
				}
			}
			renderProfile(inboxList);
		});
	$("#inputButton").on("click", function (event) {
		let inputVal = $("#chatInput").val();
		let value = event.target.value;

		console.log(inputVal);
		if (i == a) {
		chatContent[a].push({
			name: "b",
			content: inputVal,
		});
		renderMusic(chatContent[a]);
		$("#chatInput").val("");
	};
	});
};

$("#inboxSearch").on("keyup", function (event) {
	let inputVal = $("#inboxSearch").val();
	let value = event.target.value;

	let searchArray = inboxList.filter(function (item) {
		return item.name.includes(value);
	});

	renderProfile(searchArray);
	console.log(searchArray);
	searchArray = inboxList;
});