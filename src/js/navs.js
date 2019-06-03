$(window).ready(function() {
    $('.navs').each(function() {
        $(this).find('a').bind('click', function() {
            if ($(this).next().prop('tagName') == 'UL') {
                $(this).next().slideToggle();
                return false;
            }
        });
    });
});
