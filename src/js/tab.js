class Tab {
    constructor(el) {
        this.el = el;
        this.init();
    }
    init() {
        var self = this;
        this.el.find('.tabbtnsitem').each(function(index) {
            var el = $(this);
            el.bind('click', function() {
                if (!el.hasClass('active')) {
                    self.el.find('.active').each(function(index) {
                        $(this).removeClass('active');
                    });
                    el.addClass('active');
                    self.el.find('.tabcontentsitem').eq(el.index()).addClass('active');
                }else if(self.el.hasClass('collapsed')){
                    self.el.find('.active').each(function(index) {
                        $(this).removeClass('active');
                    });
                }
            });
        });
    }
}

$(window).ready(function() {
    $('.tab').each(function(index) {
        new Tab($(this));
    });
});
