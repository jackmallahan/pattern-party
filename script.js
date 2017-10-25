$('.nav-item').on('click', (e) => {
    $('.nav-item').removeClass('is-active');
    $('.plus').text('+');
    $('.content-container').addClass('is-hidden');
    $(e.target).addClass('is-active');
    $(e.target).find('.plus').text('-')
    $("#" + $(e.target).attr('data-id')).removeClass('is-hidden');
});
