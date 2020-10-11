$(document).ready(function () {
    $('#playlists').slick({
        slidesToShow: 3,
        dots: false,
        centerMode: true,
        autoplay: true,
        arrows: true,
        speed: 2000,
        autoplaySpeed: 1500,


    });
});


const dialog = document.querySelector('.dialog-scrolling');
const openButton = dialog.nextElementSibling;
const closeButton = dialog.querySelector('sl-button[slot="footer"]');

openButton.addEventListener('click', () => {dialog.show()});
closeButton.addEventListener('click', () => dialog.hide());



