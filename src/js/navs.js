class Navs {
    constructor(el) {
        this.el = el;
        this.init();
    }
    init() {
        this.el.find('a').bind('click', function() {
            if ($(this).next().prop('tagName') == 'UL') {
                $(this).next().slideToggle();
                return false;
            }
        });
    }
}

$(window).ready(function() {
    $('.navs').each(function() {
        new Navs($(this));
    });
});
