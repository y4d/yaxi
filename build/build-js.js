const webminify = require('webminify');


webminify()
    .load('icon/iconfont.js')
    .load('src', [
        'base/(yaxi|properties|watch|event|observe|observe-array|style|model|stream|http).js',
        'css/default/color.js',
        'control/(control|panel).js',
        'control/*.js'
    ])
    .combine('\r\n\r\n\r\n\r\n')
    // .compressjs()
    .output('js/yaxi.js')
    .done();
