jQuery.fn.blindLeftToggle = function (duration, easing, complete) {
    return this.animate({
        marginLeft: parseFloat(this.css('marginLeft')) < 0 ? 0 : -this.outerWidth()
    }, jQuery.speed(duration, easing, complete));
};

$(document).ready(function() {

$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    
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

