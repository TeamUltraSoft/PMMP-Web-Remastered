jQuery.fn.blindLeftToggle = function (duration, easing, complete) {
    return this.animate({
        marginLeft: parseFloat(this.css('marginLeft')) < 0 ? 0 : -this.outerWidth()
    }, jQuery.speed(duration, easing, complete));
};

$(document).ready(function() {

    $('.whats-pmmp').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } 
        else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
          offset: '60px'
    });

    $('.scroll-to').click(function() {
        $('html, body').animate({scrollTop: $('.whats-pmmp').offset().top}, 1000)
    })


$('.mobile-nav').click(function() {
    var nav = $('.sidenav');
    var icon = $('.mobile-nav i');
    
    nav.blindLeftToggle(500);

    if (icon.hasClass('fas fa-bars')) {
        icon.removeClass('fas fa-bars');
        icon.addClass('fas fa-times');
    } 
    else {
        icon.removeClass('fas fa-times');
        icon.addClass('fas fa-bars');
    }
})
    
});

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark");
  };
