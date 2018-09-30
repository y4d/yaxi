const webminify = require('webminify');


webminify()
    .load('icon/iconfont.js')
    .load('src', [
        'js/base/(yaxi|extend|properties|watch|event|observe|observe-array|style|model|stream|http|web).js',
        'css/default/color.js',
        'js/control/(control|panel).js',
        'js/control/*.js',
        'js/form/*.js',
        'js/page/page.js',
        'js/page/*.js'
    ])
    .combine('\r\n\r\n\r\n\r\n')
    // .compressjs()
    .output('js/yaxi.js');
