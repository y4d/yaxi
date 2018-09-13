yaxi.Password = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-textbox"><input type="password" /><span></span></span>');



    this.$properties({

        type: '',
        text: '',
        placeholder: ''
    });



    this.__set_type = function (dom, value) {

        dom.lastChild.className = value ? 'yx-password-' + value : '';
    }


    this.__set_text = function (dom, value) {

        dom.firstChild.textContent = value;
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



}).register('Password');
