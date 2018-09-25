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
        theme: '',
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



    Object.defineProperty(this, 'offsetTop', {

        get: function () {

            var dom = this.$dom;
            return dom ? dom.offsetTop: 0;
        }
    });


    Object.defineProperty(this, 'offsetLeft', {

        get: function () {

            var dom = this.$dom;
            return dom ? dom.offsetLeft: 0;
        }
    });


    Object.defineProperty(this, 'offsetWidth', {

        get: function () {

            var dom = this.$dom;
            return dom ? dom.offsetWidth: 0;
        }
    });


    Object.defineProperty(this, 'offsetHeight', {

        get: function () {

            var dom = this.$dom;
            return dom ? dom.offsetHeight: 0;
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


    
    this.__c_events = true

    this.__set_events = false;


    this.__init_events = function (events) {

        for (var name in events)
        {
            this.on(name, events[name]);
        }
    }
    




    this.destroy = function () {

        var dom;

        if (dom = this.$dom)
        {
            dom.$control = this.$dom = null;
        }

        if (this.__event_keys)
        {
            this.off();
        }
        
        if (this.ondestroy)
        {
            this.ondestroy();
        }

        this.$parent = null;
        this.destroyed = true;
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



    // 渲染控件
    this.render = function () {

        var dom = this.$dom || (this.$dom = this.$template.cloneNode(true)),
            any;

        dom.$control = this;

        if (any = this.__changes)
        {
            this.__update_patch(any);
        }

        if (any = this.__style)
        {
            any.__update_patch(any.__changes);
        }

        if (any = this.__events)
        {
            any.__update_patch(any.__changes);
        }

        return dom;
    }


    this.__check_update = function () {

        return this.$dom && this.__changes;
    }


    this.__update_patch = function (changes) {

        var dom = this.$dom,
            changes,
            value,
            fn;

        for (var name in changes)
        {
            this['__v_' + name] = value = changes[name];

            if (fn = this['__set_' + name])
            {
                fn.call(this, dom, value);
            }
            else if (fn !== false)
            {
                updateDom.call(this, dom, name, value);
            }
        }

        this.__changes = null;
    }


    this.__set_key = this.__set_tag = false;




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




    // 添加补丁
    var patch = yaxi.__append_patch;

    
    // 事件变更处理
    this.__event_change = function (type, items, on) {

        // input和change事件特殊处理
        if (type === 'input' || type === 'change')
        {
            return;
        }

        // 刚注册或已注销完毕才注册事件变更
        var value = on ? !items[1] : !items || !items[0];

        if (value)
        {
            var events = this.__events,
                changes;

            if (events)
            {
                if (changes = events.__changes)
                {
                    changes[type] = value;
                    return;
                }
            }
            else
            {
                events = this.__events = {
                    __owner: this,
                    __check_update: check_event,
                    __update_patch: event_patch
                }
            }

            if (this.$dom)
            {
                patch(events)[type] = value;
            }
            else
            {
                (events.__changes = {})[type] = value;
            }
        }
    }


    // 检查事件是否变更
    function check_event() {

        return this.__owner.$dom && this.__changes;
    }

    
    // 自定义事件更新逻辑
    function event_patch(changes) {

        var owner = this.__owner,
            dom = owner.$dom;

        for (var name in changes)
        {
            if (changes[name])
            {
                owner.__bind_event(dom, name, domEventListener);
            }
            else
            {
                owner.__unbind_event(dom, name, domEventListener);
            }
        }

        this.__changes = null;
    }


    function findControl(event) {

        var target = event.target,
            control;

        while (target)
        {
            if (control = target.$control)
            {
                return control;
            }

            target = target.parentNode;
        }
    }


    function domEventListener(event) {

        var control = findControl(event) || this.$control;

        event.stopPropagation();

        while (control)
        {
            if (control.disabled)
            {
                control = control.$parent;
            }
            else
            {
                if (control.trigger(event.type, { original: event }) === false)
                {
                    event.preventDefault();
                    return false;
                }

                break;
            }
        }
    }


    this.__bind_event = function (dom, name, listener) {

        dom.addEventListener(name, listener);
    }


    this.__unbind_event = function (dom, name, listener) {

        dom.removeEventListener(name, listener);
    }



    document.addEventListener('tap', function (event) {

        var control = findControl(event);

        if (control && !control.disabled)
        {
            control.__on_tap(event);
        }

    }, true);


    document.addEventListener('input', function (event) {

        var control = findControl(event);

        if (control && !control.disabled)
        {
            control.trigger('input', {
                
                value: event.target.value
            });
        }
    });


    document.addEventListener('change', function (event) {

        var control = findControl(event);

        if (control && !control.disabled)
        {
            control.__on_change(event);
            control.trigger('change');
        }

    });




    this.__on_tap = function (event) {
    }


    this.__on_change = function (event) {

        var storage = this.__storage;

        if (storage)
        {
            storage.text = event.target.value;
        }
        else
        {
            this.__v_text = event.target.value;
        }
    }




}).register('Control');
