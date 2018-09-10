yaxi.Control = yaxi.Observe.extend(function (Class, base) {


    
    var eventTarget = yaxi.EventTarget.prototype;



    this.$properties({
        
        accessKey: '',
        alt: '',
        className: '',
        disabled: false,
        id: '',
        lang: '',
        title: '',
        value: null,
        key: null,
        tag: null
    });



    Object.defineProperty(this, 'style', {

        get: function () {

            return this.__init_style();
        }
    });



    this.__c_style = '__init_style';
    
    
    this.__init_style = function (data) {

        var style = this.__style;

        if (!style)
        {
            style = this.__style = new yaxi.Style(data);
            style.owner = this;
    
            Object.defineProperty(this, 'style', {
    
                value: style,
                writable: false
            });
        }

        return style;
    }




    this.hasClass = function (name) {

        if (name)
        {
            var className = this.className;
            return className ? className.indexOf(' ' + name + ' ') >= 0 : false;
        }
        
        return false;
    }


    this.addClass = function (name) {

        if (name)
        {
            var className = this.className;

            name = ' ' + name + ' ';

            if (!className)
            {
                this.className = name;
            }
            else if (className.indexOf(name) < 0)
            {
                this.className = className + name;
            }
        }
    }


    this.removeClass = function (name) {

        if (name)
        {
            var className = this.className;

            if (className)
            {
                this.className = className.replace(' ' + name + ' ', ' ');
            }
        }
    }


    this.toggleClass = function (name) {

        if (name)
        {
            var className = this.className;

            if (className && className.indexOf(name) < 0)
            {
                this.className = className.replace(' ' + name + ' ', ' ');
            }
            else
            {
                this.className = className + name;
            }
        }
    }


    
    // 绑定事件
    this.on = eventTarget.on;

    
    // 绑定只执行一次的事件
    this.once = eventTarget.once;


    // 注销事件
    this.off = eventTarget.off;


    // 触发事件
    this.trigger = eventTarget.trigger;

    




    var div = document.createElement('div');



    yaxi.template = function (target, html) {

        var dom;

        if (target && html)
        {
            div.innerHTML = html;

            target.$template = dom = div.firstChild;
            target.$className = dom.className || 'yx-control';

            div.removeChild(dom);
        }
    }


	yaxi.template(this, '<div class="yx-control"></div>');



    this.update = function () {

        var dom = this.$dom || (this.$dom = this.$template.cloneNode(true)),
            data;

        if (data = this.__storage)
        {
            this.$patch(data);
        }

        if (data = this.__style)
        {
            data.$patch(data.__storage);
        }

        return dom;
    }


    this.$patch = function (storage) {

        var dom = this.$dom;

        for (var name in storage)
        {
            (this['__set_' + name] || updateDom).call(this, dom, storage[name], name);
        }

        base.$patch.call(this, storage);
    }



    function updateDom(dom, value, name) {

        if (value)
        {
            dom.setAttribute(name, value === true ? name : value);
        }
        else
        {
            dom.removeAttribute(name);
        }
    }


    this.__set_className = function (dom, value) {

        dom.className = value ? this.$className + ' ' + value : this.$className;
    }


    
    // 自定义事件更新逻辑
    this.__event_patch = function (storage) {

        var control = this.owner,
            dom = owner.$dom;

        if (dom)
        {
            for (var name in storage)
            {
                if (storage[name])
                {
                    dom.$control = control;
                    dom.addEventListener(name, domEventListener);
                }
                else
                {
                    dom.$control = null;
                    dom.removeEventListener(name, domEventListener);
                }
            }
        }

        this.storage = null;
    }


    function domEventListener(event) {

        var control = this.$control;

        event.stopPropagation();

        if (control && control.trigger(event.type, { original: event }) === false)
        {
            event.preventDefault();
            return false;
        }
    }



}).register('Control');
