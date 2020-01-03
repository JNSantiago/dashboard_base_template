$(document).ready(function () {
    $('.hamburger').on('click', () => {
        if($('.hamburger').hasClass('expanded')) {
            console.log('expanded')
            $('sidebar').css('width', '400px');
            $('.hamburger').css('right', 'calc(100% - 336px)').removeClass('expanded');
            $('.logo').css('display',  'block');
        } else {
            $('sidebar').css('width', '6%');
            $('.hamburger').css('right', 'calc(96% - 46px)').addClass('expanded');
            $('.logo').css('display',  'none');
        }
    });
});