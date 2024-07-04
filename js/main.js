
$('.open-close-icon').click(() => {
    // console.log('hiiiiiiiiiii');
    if ($('#side-nav').css('right') === '-200px') {
        $('#side-nav').animate({ right: 0 }, 500)
    }
    else {
        $('#side-nav').animate({ right: '-200px' }, 500)
    }

})


$(window).scroll(function () {

    let offset = $('#services').offset().top
    let scrollTop = $(window).scrollTop()
    let navBarHeight = $('#Fullnavbar').outerHeight()

    console.log(scrollTop);
    console.log(offset);
    console.log(navBarHeight);

    if (scrollTop > offset - navBarHeight) {
        $('#btnUp').fadeIn(300)
    }
    else {
        $('#main-nav').css('background-color', 'transparent')
        $('#btnUp').fadeOut(300)

    }
});


$('#btnUp').click(function () {
    $('html').animate({ scrollTop: 0 }, 100)
})
