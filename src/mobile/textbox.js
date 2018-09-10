yaxi.TextBox = yaxi.Control.extend(function (Class, base) {


    yaxi.template(this, '<input type="text" class="yx-control yx-textbox" />');


    this.$properties({

        max: 0,
        maxLength: 0,
        min: 0,
        minLength: 0,
        multiple: false,
        name: '',
        placeholder: '',
        readonly: false,
        title: '',
        value: null
    });


});
