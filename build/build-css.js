const webminify = require('webminify');


webminify()
    .load('src/css', [
        'default/color.less',
        'base/(reset|animation|base|layout).less',
        'control/(control|textbox).less',
        'control/*.less'
    ])
    .combine('\r\n\r\n\r\n\r\n')
    .lessToCss()
    .output('css/default/yaxi.css')
    .done();
