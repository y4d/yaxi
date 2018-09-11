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



    // 父控件
    Object.defineProperty(this, 'parent', {

        get: function () {

            return this.$parent;
        }
    })


    // 顶级控件
    Object.defineProperty(this, 'root', {

        get: function () {

            var target = this,
                parent;

            while (parent = target.$parent)
            {
                target = parent;
            }

            return target;
        }
    });



    // 样式集
    Object.defineProperty(this, 'style', {

        get: function () {

            return this.__init_style();
        }
    });



    this.__c_style = true;
    
    
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
            return className ? className.indexOf(name) >= 0 : false;
        }
        
        return false;
    }


    this.addClass = function (name) {

        if (name)
        {
            var className = this.className;

            if (!className)
            {
                this.className = name;
            }
            else if (className.indexOf(name) < 0)
            {
                this.className = className + ' ' + name;
            }
        }
    }


    this.removeClass = function (name) {

        if (name)
        {
            var className = this.className;

            if (className)
            {
                this.className = className.replace(name, '').replace(/(?:^|\s)\s+|\s$/, '');
            }
        }
    }


    this.toggleClass = function (name) {

        if (name)
        {
            var className = this.className;

            if (className && className.indexOf(name) < 0)
            {
                this.className = className.replace(name, '').replace(/(?:^|\s)\s+|\s$/, '');
            }
            else
            {
                this.className = className + ' ' + name;
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



    this.update = function () {

        var dom = this.$dom || (this.$dom = this.$template.cloneNode(true)),
            any;

        dom.$control = this;

        if (this.__changes)
        {
            this.__update_patch();
        }

        if (any = this.__style)
        {
            any.__update_patch();
        }

        if (any = this.__events)
        {
            any.__update_patch();
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

        var dom = this.owner.$dom,
            changes;

        if (dom && (changes = this.__changes))
        {
            for (var name in changes)
            {
                if (changes[name])
                {
                    dom.addEventListener(name, domEventListener);
                }
                else
                {
                    dom.removeEventListener(name, domEventListener);
                }
            }

            this.changes = null;
        }
    }


    function domEventListener(event) {

        var dom = event.target,
            any;

        while (dom && dom !== this)
        {
            if (any = dom.$control)
            {
                break;
            }

            dom = dom.parentNode;
        }

        event.stopPropagation();

        any = any ? { target: any, original: event } : { original: event };

        if (this.$control.trigger(event.type, any) === false)
        {
            event.preventDefault();
            return false;
        }
    }



}).register('Control');
