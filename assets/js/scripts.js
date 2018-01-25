$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 135) {
        setTimeout(function(){
            $('.navigation').addClass('slick');
            $('body').addClass('header-slick'); 
            $('.footer').addClass('slick'); 
        }, 135);
    } else {
        setTimeout(function(){
            $('.navigation').removeClass('slick');
            $('body').removeClass('header-slick');
            $('.footer').removeClass('slick'); 
        }, 135);
    }
});