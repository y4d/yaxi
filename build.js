const webminify = require('webminify');


webminify()
    .load('node_modules/jiax/js/jiax.js')
    .load('src/(yaxi|node|page).js')
    .combine('\r\n\r\n\r\n\r\n')
    // .compressjs()
    .output('js/yaxi.js');
