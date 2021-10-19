define(["mouseEnter"], function() {
    function mouseEnter() {
        console.log("function ran")
        $(this).css({
            "text-decoration": "underline"
        });
    };
});