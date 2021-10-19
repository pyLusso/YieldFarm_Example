define(["jquery"], function($) {
    $(".defi-nav").hover(mouseEnter, mouseLeave);

    function mouseEnter() {
        $(this, "h3").css({
            "font-size": "20",
            "text-decoration": "underline"
        });
    };
    
    function mouseLeave() {
        $(this, "h3").css({
            "font-size": "16",
            "text-decoration": "none"
        });
    };
});