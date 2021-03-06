(function () {
    
    'use strict';
    
    angular
    .module('app', [
        'app.core',
        'app.services',
        'app.filters',
        'app.components',
        'app.home',
        'app.health',
        'app.dashboard',
        'app.beans',
        'app.trace',
        'app.env',
        'app.metrics',
        'app.threads',
        'app.mappings'
    ]);
    
})();