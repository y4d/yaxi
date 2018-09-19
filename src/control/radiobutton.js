yaxi.RadioButton = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<span class="yx-control yx-radiobutton"><span class="yx-icon"></span><span></span></span>');



    this.$properties({

        text: '',

        fill: '',
        
        checked: false
    });
    


    this.__set_text = function (dom, value) {

        dom.lastChild.textContent = value;
    }


    this.__set_checked = function (dom, value) {

        dom.classList[value ? 'add' : 'remove']('yx-radiobutton-checked');
    }


    this.__set_fill = function (dom, value) {

        dom.firstChild.style.fill = value;
    }


    this.__on_tap = function () {

        this.checked = !this.checked;
        this.trigger('change');
    }



}).register('RadioButton');
