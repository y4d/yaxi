yaxi.Button = yaxi.Control.extend(function (Class, base) {


    yaxi.template(this, '<button type="button" class="yx-control yx-button"></button>');


    this.$properties({

        text: '',
    });
    


    this.__set_text = function (dom, value) {

        dom.textContent = value;
    }



}).register('CheckBox');
