class Collapse {
    constructor(el) {
        this.el = el;
        this.init();
    }
    init() {
        var self = this;
        this.el.find('.collapsebtn').bind('click', function() {
            self.el.toggleClass('active');
        });
    }
}

$(window).ready(function() {
    $('.collapse').each(function(index) {
        new Collapse($(this));
    });
});
