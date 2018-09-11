yaxi.Control = yaxi.Observe.extend(function (Class, base) {


    
    var eventTarget = yaxi.EventTarget.prototype;


    
    Class.register = function (name) {

        if (name)
        {
            yaxi.classes[this.typeName = this.prototype.typeName = name] = this;
        }

        return this;
    }


    
    // 不处理bindings属性
    this.__c_bindings = false;

    


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




    this.destroy = function () {

        var dom;

        this.destroyed = true;
        
        if (dom = this.$dom)
        {
            dom.$control = this.$dom = null;
        }

        if (this.ondestroy)
        {
            this.ondestroy();
        }
    }




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


    // svg图标模板
    this.__svg_template = '<svg class="yx-svg-icon" aria-hidden="true"><use xlink:href="#id"></use></svg>';



    this.update = function () {

        var dom = this.$dom || (this.$dom = this.$template.cloneNode(true));

        if (this.__changes)
        {
            this.__update_patch();
        }

        if (this.__style)
        {
            this.__style.__update_patch();
        }

        return dom;
    }


    this.__update_patch = function () {

        var changes = base.__update_patch.call(this),
            dom = this.$dom,
            fn;

        for (var name in changes)
        {
            if (fn = this['__set_' + name])
            {
                fn.call(this, dom, changes[name]);
            }
            else if (fn !== false)
            {
                updateDom.call(this, dom, name, changes[name]);
            }
        }

        return changes;
    }



    function updateDom(dom, name, value) {

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
    this.__event_patch = function () {

        var changes = this.__changes;

        if (changes)
        {
            var control = this.owner,
                dom = control.$dom;

            if (dom)
            {
                for (var name in changes)
                {
                    if (changes[name])
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

            this.changes = null;
        }
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