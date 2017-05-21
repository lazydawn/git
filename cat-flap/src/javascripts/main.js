requirejs.config({
    paths: {
        jquery: 'jquery',
        bootstrap: 'bootstrap'
    },
    shim: {
        'bootstrap':{deps: ['jquery']}
    }
});

require(['jquery','bootstrap'], function($, _bootstrap){
        return {};
});
