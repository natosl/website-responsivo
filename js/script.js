$(function () {

    // abre e fecha o menu
    $('.nav-toggle, .nav-close').click(function(e) {
        e.preventDefault();
        $('.nav').toggleClass('active');
    })

})