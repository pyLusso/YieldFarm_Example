requirejs.config({
    baseUrl: "js/lib",
    paths: {
        app: "../app",
        jquery: 'https:////ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
        web3: 'https://cdn.jsdelivr.net/npm/web3@1.6.0/dist/web3.min',
        metamask: ['https://cdn.jsdelivr.net/npm/@metamask/detect-provider@1.2.0/dist/detect-provider.min',
                   'https://cdn.jsdelivr.net/npm/@metamask/detect-provider@1.2.0/dist/index.min.js']
    },
    nodeRequire: require
});
