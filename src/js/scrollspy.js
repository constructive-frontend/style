class ScrollSpyMenu {
    constructor(sel, ressel) {
        this.sel = sel;
        this.ressel = ressel;
        this.resel = $(ressel);
        this.init();
    }
    init() {
        let self = this;
        $(self.sel).each(function(index) {
            new ScrollSpyMenuItem($(this), self);
        });
    }
}

class ScrollSpyMenuItem {
    constructor(el, group) {
        this.el = el;
        this.group = group;
        this.init();
    }
    init() {
        let self = this;
        let title = self.el.data('title');
        let ico = self.el.data('ico');
        let lvl = self.el.data('lvl');
        let str = $(`
            <div class="scrollspymenuitem lvl${lvl}">
                <div class="ico">
                    <i class="fa ${ico}" aria-hidden="true"></i>
                </div>
                <div class="title">${title}</div>
            </div>
        `);
        str.bind('click', function() {
            $('html, body').animate({
                scrollTop: self.el.offset().top
            }, 500);
        });
        $(window).on('scroll', function() {
            var elValFromTop = Math.ceil(self.el.offset().top),
                windowHeight = $(window).height(),
                windowScrollValFromTop = $(this).scrollTop();

            if ((windowHeight + windowScrollValFromTop) > elValFromTop) {
                str.addClass('active');
            } else {
                str.removeClass('active');
            }
        });
        self.group.resel.append(str);
    }
}

$(window).ready(function() {
    new ScrollSpyMenu('.scrollspy', '#scrollspyres');
});
