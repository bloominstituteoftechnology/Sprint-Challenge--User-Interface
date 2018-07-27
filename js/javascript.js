
// enables responsive menu toggle
$(document).ready(function () {
    $('#collapse-btn').click(function () {
        if ($('#navigation').hasClass('navbar')) {
            $('#navigation').removeClass('navbar');
            $('#navigation').addClass('navbar-open');
        } else {
            $('#navigation').removeClass('navbar-open');
            $('#navigation').addClass('navbar');
        }
    });

});

// Sticky navbar javascript
$(document).ready(function () {
    window.onscroll = function () {
        stickyNav();
    }

    var navbar = document.getElementById('navigation');
    var offset = navbar.offsetTop;

    function stickyNav() {
        if (window.pageYOffset >= offset) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }
})




// Run a continuous check for the page width
// This prevents the responsive menu from staying open
// if page resizes to larger than 800px
$(document).ready(function() {
    setInterval(function(){
        if($(window).width() > 800){
            $('#navigation').removeClass('navbar-open');
            $('#navigation').addClass('navbar');
        }
    }, 100);
});