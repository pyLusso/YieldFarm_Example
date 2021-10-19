define(["jquery"], function($) {
    $.fn.toggle_connect_button = function() {
        var elem = document.getElementById("wallet_button");

        if (elem.className == "connect") {
            $(".connect").addClass("disconnect").removeClass("connect");
            $('#wallet_button').text('Disconnect Wallet');
        } else {
            $(".disconnect").addClass("connect").removeClass("disconnect");
            $('#wallet_button').text('Connect Wallet');
        }
    };
});