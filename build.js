const webminify = require('webminify');


webminify()
    .load('src', [
        'base/(yaxi|properties|watch|event|observe|observe-array|style|model).js',
        'control/(control|panel).js',
        'control/*.js'
    ])
    .combine('\r\n\r\n\r\n\r\n')
    // .compressjs()
    .output('js/yaxi.js');
