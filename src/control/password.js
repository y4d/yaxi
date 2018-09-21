yaxi.Password = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-textbox yx-password"><input type="password" /><svg aria-hidden="true"><use xlink:href="#icon-eye-open"></use></svg></span>');



    this.$properties({

        type: '',
        text: '',
        placeholder: ''
    });


    // 获取输入的文字内容
    Object.defineProperty(this, 'input', {

        get: function () {

            return this.$dom.firstChild.value;
        }
    });


    

    this.__set_type = function (dom, value) {

        dom.lastChild.className = value ? 'yx-password-' + value : '';
    }


    this.__set_text = function (dom, value) {

        dom.firstChild.value = value;
    }


    this.__set_placeholder = function (dom, value) {

        dom.firstChild.placeholder = value;
    }


    
    
    this.__on_input = this.__on_change = function (event) {

        this.text = event.target.value;
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



    this.__on_tap = function (event) {

        var target = event.target,
            dom = this.$dom,
            icon;

        while (target && target !== dom)
        {
            if (target.tagName === 'svg')
            {
                dom = dom.firstChild;
                
                if (dom.type === 'text')
                {
                    dom.type = 'password';
                    icon = 'eye-open';
                }
                else
                {
                    dom.type = 'text';
                    icon = 'eye-close';
                }

                target.firstChild.setAttribute('xlink:href', '#icon-' + icon);
                return;
            }

            target = target.parentNode;
        }
    }




}).register('Password');
