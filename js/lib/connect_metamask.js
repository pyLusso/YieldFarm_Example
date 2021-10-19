define(["jquery"], function($) {
  $.fn.connect_metamask = async function() {
    await ethereum.request({ method: 'eth_requestAccounts' })
  };
  
});
