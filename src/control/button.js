yaxi.Button = yaxi.Control.extend(function (Class, base) {


    yaxi.template(this, '<span class="yx-control yx-button" tabindex="0"><span class="yx-button-icon"></span><span></span></span>');


    this.$properties({

        // 文本内容
        text: '',

        // 按钮类型 default | primary | success | info | warn | danger
        type: 'default',

        // 图标类名
        icon: '',

        // svg图标id
        svg: '',

        // 是否朴素按钮
        plain: false,

        // 图标和文字是否竖排
        vertical: false,

        // 是否默认聚焦
        autofocus: false,

        // 是否加载中状态
        loading: false
    });
    



    
    this.__set_type = function (dom, value) {

        dom.className = control.__class1 + (control.__class2 = value ? ' yx-button-' + value : '') + control.__class3; 
    }


    this.__set_icon = function (dom, value) {

        dom.firstChild.className = 'yx-button-icon' + (value ? ' ' + value : '');
    }


    this.__set_svg = function (dom, value) {

        dom.firstChild.innerHTML = value ? '<svg aria-hidden="true"><use xlink:href="#' + value + '"></use></svg>' : '';
    }


    this.__set_plain = function (dom, value) {

        if (value)
        {
            dom.setAttribute('plain', 1);
        }
        else
        {
            dom.removeAttribute('plain');
        }
    }
    
    
    this.__set_vertical = function (dom, value) {

        value = value ? 'block' : '';

        dom.firstChild.style.display = value;
        dom.lastChild.style.display = value;
    }


    this.__set_loading = function (dom, value) {

        dom = dom.firstChild;

        if (value)
        {
            dom.setAttribute('loading', 1);
        }
        else
        {
            dom.removeAttribute('loading');
        }
    }


    this.__set_autofocus = function (dom, value) {

        if (value)
        {
            dom.focus();
        }
    };


    this.__set_text = function (dom, value) {

        dom.lastChild.textContent = value;
    }



}).register('Button');
