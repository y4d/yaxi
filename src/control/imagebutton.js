yaxi.ImageButton = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<span class="yx-control yx-imagebutton"><span class="yx-button-icon"></span><span></span></span>');



    this.$properties({

        // 文本内容
        text: '',

        // 图标类名
        icon: '',

        // svg图标id
        svg: '',

        // 是否竖排
        vertical: false
    });
    



    this.__set_icon = function (dom, value) {

        dom.firstChild.className = 'yx-button-icon' + (value ? ' ' + value : '');
    }


    this.__set_svg = function (dom, value) {

        dom.firstChild.innerHTML = value ? this.__svg_template.replace('id', value) : '';
    }

    
    
    this.__set_vertical = function (dom, value) {

        value = value ? 'block' : '';

        dom.firstChild.style.display = value;
        dom.lastChild.style.display = value;
    }


    this.__set_text = function (dom, value) {

        dom.lastChild.textContent = value;
    }



}).register('ImageButton');
