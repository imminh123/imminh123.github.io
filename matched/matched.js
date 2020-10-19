$(document).ready(function(){
    $('#users').slick({
    slidesToShow: 1,
    dots:false,
    
    autoplay: false,

    });
});

let heartButton =$('#heartButton');
heartButton.on('click',function(){
    heartButton.toggleClass('heartActive');
})

