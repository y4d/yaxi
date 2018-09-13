yaxi.Button = yaxi.Control.extend(function (Class, base) {


    yaxi.template(this, '<button type="button" class="yx-control yx-button"></button>');


    this.$properties({

        type: '',
        text: '',
    });
    


    this.__set_type = function (dom, value) {

        dom.setAttribute('theme', value)
    }


    this.__set_text = function (dom, value) {

        dom.textContent = value;
    }



}).register('Button');
