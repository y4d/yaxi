yaxi.CheckBox = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<span class="yx-control yx-checkbox"><svg aria-hidden="true"><use xlink:href="#icon-checkbox-uncheck"></use></svg><span></span></span>');



    this.$properties({

        text: '',
        
        fill: '',

        checked: false
    });
    


    this.__set_text = function (dom, value) {

        dom.lastChild.textContent = value;
    }


    this.__set_checked = function (dom, value) {

        dom.firstChild.firstChild.setAttribute('xlink:href', '#icon-checkbox-' + (value ? 'checked' : 'uncheck'));
    }


    this.__set_fill = function (dom, value) {

        dom.firstChild.style.fill = value;
    }



    this.__on_tap = function () {

        this.checked = !this.checked;
        this.trigger('change');
    }



}).register('CheckBox');
