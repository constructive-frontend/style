$(window).ready(function() {
    $('pre').each(function() {
        let code = $(this).html();
        code = code.replace(/&/g, "&amp;");
        code = code.replace(/</g, "&lt;");
        $(this).html(code);
    });
});
