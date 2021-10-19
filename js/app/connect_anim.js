define(["jquery"], function($) {
    $(".connect").hover(mouseEnter, mouseLeave);

    function mouseEnter() {
        $(this).css({
            "font-weight": "bold"
        });
    };
    
    function mouseLeave() {
        $(this).css({
            "font-weight": "normal"
        });
    };
});