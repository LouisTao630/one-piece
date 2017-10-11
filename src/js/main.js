require.config({

    paths: {
        'jquery': 'lib/jquery.min',
        'popper': 'lib/popper.min',
        'bootstrap': 'lib/bootstrap.min',
        'demo_ajax': 'scripts/demo_ajax',
        'gui_init': 'scripts/gui_init'
    },
    shim: {
        popper: {
            exports: 'Popper.Defaults'
        },
        bootstrap: {
            deps: ['jquery', 'popper']
        },
        gui_init: {
            deps: ['bootstrap']
        }
    }
});

/**
 * BootStrap4.0需要加载popper，所有初始化popper到window对象中。
 * 必须在bootstrap之前完成加载。
 * @param  {[type]} popper) {               window.Popper [description]
 * @return {[type]}         [description]
 */
require(['popper'], function(popper) {
    window.Popper = popper.Defaults;
});

require(['gui_init'], function(guiInit) {
    guiInit.init();
});