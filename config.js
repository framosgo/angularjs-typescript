require.config({

  // alias libraries paths
    paths: {
        'angular': './node_modules/angular/angular'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        }
    },

    // kick start application
    deps: ['./dist/index']
});