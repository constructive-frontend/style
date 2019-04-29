class Modal {
    constructor(el) {
        this.el = el;
        this.init();
    }
    init() {
        var self = this;
        this.el.find('.modalbtn').bind('click', function() {
            self.el.addClass('active');
            $('<div/>', {
                class: 'overlay',
            }).bind('click', function() {
                self.el.removeClass('active');
                $(this).remove();
            }).appendTo('body');
        });
    }
}

$(window).ready(function() {
    $('.modal').each(function(index) {
        new Modal($(this));
    });
});
