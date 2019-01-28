class Sidenav {
    constructor(el) {
        this.el = el;
        this.init();
    }
    init() {
        var self = this;
        self.el.find('.sidenavbtn').bind('click', function(index) {
            var el = $(this);
            self.el.toggleClass('active');
            self.el.find('.sidenavbtnicon').find('.fa').toggleClass('fa-bars');
            self.el.find('.sidenavbtnicon').find('.fa').toggleClass('fa-times');
        });
    }
}


$(window).ready(function() {
    $('.sidenav').each(function(index) {
        new Sidenav($(this));
    });
});
