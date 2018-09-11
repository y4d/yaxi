const webminify = require('webminify');


webminify()
    .load('src/css', [
        'default/color.less',
        'base/(reset|iconfont|animation|layout).less',
        'control/*.less'
    ])
    .combine('\r\n\r\n\r\n\r\n')
    .lessToCss()
    .output('css/default/yaxi.css')
    .done();
