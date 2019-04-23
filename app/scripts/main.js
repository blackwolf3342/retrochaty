var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
}

$(document).ready(function () {
    $('a.button-green').click(function() {
        $('.pop-wrapper').toggleClass('open');
        $('.thanks').addClass('closed');
        $('.header').addClass('scroll');
    })

    $('form.checkout').submit(function (event) {
        $('.dedline').addClass('closed');
        $('.thanks').removeClass('closed');
        $('.top').slideToggle()[0].scrollIntoView();
        event.preventDefault();
    })

    $('.continue').click(function (event) {
        $('.thanks').addClass('closed');
        $('.dedline').removeClass('closed');
        event.preventDefault();
    })

    $('#toggle').click(function (event) {
        $('.nav-wrapper').toggleClass('toggle');
    })

})


$(window).scroll(function() { 
    var pop = $('.pop-wrapper');
    if (pop.hasClass('open')) {

    }else {
        var the_top = $(document).scrollTop();
        if (the_top > 100) {
            $('.header').addClass('scroll');
        }
        else {
            $('.header').removeClass('scroll');
        }
        
    }

});