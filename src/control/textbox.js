yaxi.TextBox = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-textbox"><input type="text" /></span>');



    this.$properties({

        text: { alias: 'value', defaultValue: '' },
        placeholder: ''
    });



    this.__set_text = function (dom, value) {

        dom.firstChild.textContent = value;
    }



}).register('TextBox');
