
yaxi.IconButton = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<span class="yx-control yx-iconbutton"><span class="icon"></span><span></span></span>');



    this.$properties({

        // 文本内容
        text: '',

        // 图标类名
        icon: '',

        // svg图标id
        svg: ''
    });
    



    this.__set_icon = function (dom, value) {

        dom.firstChild.className = 'icon' + (value ? ' ' + value : '');
    }


    this.__set_svg = function (dom, value) {

        dom.firstChild.innerHTML = value ? '<svg aria-hidden="true"><use xlink:href="#' + value + '"></use></svg>' : '';
    }


    this.__set_text = function (dom, value) {

        dom.lastChild.textContent = value;
    }



}).register('IconButton');
