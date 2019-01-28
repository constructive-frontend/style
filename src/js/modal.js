class Modal {
    constructor(el) {
        this.el = el;
        this.init();
    }
    init() {
        var self = this;
        this.el.find('.modalbtn').bind('click', function() {
            self.el.toggleClass('active');
        });
    }
}

$(window).ready(function() {
    $('.modal').each(function(index) {
        new Modal($(this));
    });
});
