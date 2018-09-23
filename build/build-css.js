const webminify = require('webminify');


webminify()
    .load('src/css', [
        'default/color.less',
        'base/(reset|animation|base|layout).less',
        'control/control.less',
        'control/*.less',
        'form/textbox.less',
        'form/*.less',
        'page/*.less'
    ])
    .combine('\r\n\r\n\r\n\r\n')
    .lessToCss()
    .output('css/default/yaxi.css')
    .done();
