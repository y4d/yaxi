yaxi.Password = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-password"><input type="password" /></span>');



    this.$properties({

        text: ''
    });



    this.__set_text = function (dom, value) {

        dom.firstChild.textContent = value;
    }



}).register('Password');
