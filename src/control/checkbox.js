yaxi.CheckBox = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<span class="yx-control yx-checkbox"><span class="yx-icon"></span><span></span></span>');



    this.$properties({

        text: '',
        checked: false
    });
    


    this.__set_text = function (dom, value) {

        dom.lastChild.textContent = value;
    }


    this.__set_checked = function (dom, value) {

        dom.classList[value ? 'add' : 'remove']('yx-checkbox-checked');
    }


    this.__on_tap = function () {

        this.checked = this.$dom.firstChild.checked = !this.checked;
        this.trigger('change');
    }



}).register('CheckBox');
