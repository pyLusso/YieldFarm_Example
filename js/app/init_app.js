define(["jquery"], function($) {
    // console.log('Entered function')
    $.fn.display_wallet_addr = function() {
        if (ethereum.selectedAddress != null) {
            addr = ethereum.selectedAddress
            addr_prefix = addr.slice(0,4)
            addr_suffix = addr.slice(addr.length-4,addr.length)
            addr_string = addr_prefix + "..." + addr_suffix
            $('#wallet_button').css({
                "width": "200"
            })
            $('#wallet_button').text('connected as ' + addr_string);
        }
    }

    $().display_wallet_addr();
});