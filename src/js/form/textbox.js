yaxi.TextBox = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-textbox"><input type="text" /></span>');



    this.$properties({

        text: '',
        placeholder: ''
    });


    // 获取输入的文字内容
    Object.defineProperty(this, 'input', {

        get: function () {

            var dom = this.$dom;
            return dom ? dom.firstChild.value : 0;
        }
    });



    this.__set_text = function (dom, value) {

        dom.firstChild.value = value;
    }


    this.__set_placeholder = function (dom, value) {

        dom.firstChild.placeholder = value;
    }

    

    this.__bind_event = function (dom, name, listener) {

        if (name === 'focus' || name === 'blur')
        {
            dom = dom.firstChild;
        }

        dom.addEventListener(name, listener);
    }


    this.__unbind_event = function (dom, name, listener) {

        if (name === 'focus' || name === 'blur')
        {
            dom = dom.firstChild;
        }

        dom.removeEventListener(name, listener);
    }



}).register('TextBox');
