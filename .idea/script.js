
$(window).on('load' ,function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


// Team memebers .......//

$(function() {
    $('#team-members').owlCarousel({
        items:2,
        margin:10,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause : true,
        nav: true,
        dots: false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right" ></i>']


    });
});
