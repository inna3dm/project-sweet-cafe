$('.nav-bar-toggle').on('click', function() {
    $(this).closest('.nav-bar').toggleClass('is-shown')
});

$('.nav-bar-menu a').on('click', function() {
    $(this).closest('.nav-bar-menu').find('a').removeClass('active');
    $(this).addClass('active')
});

$('.nav-bar-menu a').on('click', function() {
    $(this).closest('.nav-bar').removeClass('is-shown')
});
