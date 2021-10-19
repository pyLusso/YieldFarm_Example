define(["jquery", 
        "metamask", 
        "web3", 
        "connect_metamask"], 

function($, detectEthereumProvider) {
    $(".connect" ).click(async function() {
        const provider = await detectEthereumProvider();

        if (provider) {
            await $().connect_metamask();
            $().display_wallet_addr();
        } else {
            console.log('Please install MetaMask!');
        }
        // console.log(ethereum.selectedAddress);
    });
});