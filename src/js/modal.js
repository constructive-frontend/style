class Modal {
    constructor(el) {
        this.el = el;
        this.overlay = {};
        this.init();
    }
    init() {
        var self = this;
        this.el.find('.modalbtn').bind('click', function() {
            self.el.addClass('active');
            $('<div/>', {
                class: 'overlay',
            }).bind('click', function() {
                self.hide();
            }).appendTo('body');
            self.overlay = $('.overlay');
            self.el.find('.modalcontent-header-close').bind('click', function() {
                self.hide();
            });
        });
    }
    hide() {
        var self = this;
        self.el.removeClass('active');
        self.overlay.remove();
    }
}

$(window).ready(function() {
    $('.modal').each(function(index) {
        new Modal($(this));
    });
});
