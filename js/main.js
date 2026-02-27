$(function () {
    // Mobile side nav open/close
    $('.open-close-icon').click(() => {
        if ($('#side-nav').css('right') === '-200px') {
            $('#side-nav').animate({ right: 0 }, 500);
        }
        else {
            $('#side-nav').animate({ right: '-200px' }, 500);
        }
    });

    // Theme (light / dark) toggle
    const THEME_KEY = 'theme';

    function applyTheme(theme) {
        const isDark = theme === 'dark';
        $('body').toggleClass('dark-mode', isDark);

        const iconClass = isDark ? 'fa-sun' : 'fa-moon';
        const removeClass = isDark ? 'fa-moon' : 'fa-sun';

        $('#themeToggle i')
            .removeClass(removeClass)
            .addClass(iconClass);

        $('#themeToggleMobile i')
            .removeClass(removeClass)
            .addClass(iconClass);
    }

    const storedTheme = localStorage.getItem(THEME_KEY) || 'light';
    applyTheme(storedTheme);

    $('#themeToggle, #themeToggleMobile').on('click', function () {
        const isDarkNow = $('body').hasClass('dark-mode');
        const nextTheme = isDarkNow ? 'light' : 'dark';
        applyTheme(nextTheme);
        localStorage.setItem(THEME_KEY, nextTheme);
    });

    // Scroll-based interactions: back-to-top + reveal sections
    function handleScrollAnimations() {
        const windowHeight = $(window).height();
        const scrollTop = $(window).scrollTop();

        $('.animate-section').each(function () {
            const sectionTop = $(this).offset().top;
            if (scrollTop + windowHeight - 150 > sectionTop) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).scroll(function () {
        let offset = $('#services').offset().top;
        let scrollTop = $(window).scrollTop();
        let navBarHeight = $('#Fullnavbar').outerHeight();

        if (scrollTop > offset - navBarHeight) {
            $('#btnUp').fadeIn(300);
        }
        else {
            $('#btnUp').fadeOut(300);
        }

        handleScrollAnimations();
    });

    // Initial state for scroll animations
    handleScrollAnimations();

    $('#btnUp').click(function () {
        $('html').animate({ scrollTop: 0 }, 100);
    });
});
