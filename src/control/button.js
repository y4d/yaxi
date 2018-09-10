yaxi.Button = yaxi.Control.extend(function (Class, base) {


    yaxi.template(this, '<input type="button"></input>');


    this.$properties({

        'text': { alias: 'value', defaultValue: '' }
    });
    

}).register('Button');
