(function (yaxi) {


    
    var classes = yaxi.classes;


    var base = Array.prototype;

    var prototype = (yaxi.Model = Model).prototype = Object.create(base);


    var bindingTarget = [];

    var $properties;




    function Model(properties) {

        this.$subtype = Object.extend.call({}, function (Class) {

            Class.ctor = function (data) {

                if (data)
                {
                    for (var name in data)
                    {
                        this['__v_' + name] = data[name];
                    }
                }
            }

            $properties.call(this, properties);

        });
    }

    


    prototype.length = 0;



    // 绑定
    prototype.bind = function (container) {

        var bindings = this.__bindings;

        if (bindings)
        {
            if (bindings.indexOf(container) < 0)
            {
                bindings.push(container);
            }
        }
        else
        {
            this.__bindings = [container];
        }
    }


    // 解除绑定
    prototype.unbind = function (container) {

        var bindings = this.__bindings,
            index;

        if (bindings && (index = bindings.indexOf(container)) >= 0)
        {
            bindings.splice(index, 1);
        }
    }


    
    function checkItems(model, fn, index, items, list) {

        var subtype = model.$subtype,
            length = items.length,
            start,
            item;

        if (list)
        {
            start = 2;
        }
        else
        {
            list = [];
            start = 0;
        }

        while (start < length)
        {
            item = new subtype(items[start++]);
            item.$parent = model;
            item.__index = index++;

            list.push(item);
        }

        if ((item = model.__bindings) && item[0])
        {
            createTarget(model, item, list, fn, index);
        }

        return list;
    }



    prototype.push = function () {

        if (arguments.length > 0)
        {
            return base.push.apply(this, checkItems(this, 'push', this.length, arguments));
        }

        return this.length;
    }


    prototype.pop = function () {

        var item = base.pop.call(this);

        if (item)
        {
            item.$parent = null;

            
        }

        return item;
    }


    prototype.unshift = function () {

        if (arguments.length > 0)
        {
            var items = checkItems(this, 'unshift', 0, arguments),
                offset = items.length;

            for (var i = this.length; i--;)
            {
                this[i].__index = offset + i;
            }

            return base.unshift.apply(this, items);
        }

        return this.length;
    }


    prototype.shift = function () {

        var item = base.shift.call(this);

        if (item)
        {
            item.$parent = null;

            for (var i = this.length; i--;)
            {
                this[i].__index = i;
            }
        }

        return item;
    }


    prototype.splice = function (index, length) {

        var list;

        switch (arguments.length)
        {
            case 0:
                return [];

            case 1:
                list = base.splice.call(this, index);
                break;

            case 2:
                list = base.splice.call(this, index, length);
                break;

            default:
                list = checkItems(this, 'splice', index |= 0, arguments, [index, length]);
                list = base.splice.apply(this, list);
                break;
        }

        if (list.length > 0)
        {
            for (var i = list.length; i--;)
            {
                list[i].$parent = null;
            }

            length = this.length;
            
            while (index < length)
            {
                this[i].__index = index++;
            }
        }

        return list;
    }


    prototype.clear = function () {

        var list = base.splice.call(this, 0);

        if (list.length > 0)
        {
            for (var i = list.length; i--;)
            {
                list[i].$parent = null;
            }
        }

        return list;
    }


    prototype.sort = function (sortby) {

        if (this.length > 0)
        {
            base.sort.call(this, sortby);
        }

        return this;
    }


    prototype.reverse = function () {

        if (this.length > 0)
        {
            base.reverse.call(this);
        }

        return this;
    }



    yaxi.__extend_watch(prototype, '');



    

    
    $properties = yaxi.__extend_properties(function (name, key) {

        target = bindingTarget;

        return function () {

            var bindings, items;

            if (target[0])
            {
                if (bindings = this.__bindings)
                {
                    if (items = bindings[name])
                    {
                        items.push([target.slice(0)])
                    }
                    else
                    {
                        bindings[name] = [target.slice(0)];
                    }
                }
                else
                {
                    (this.__bindings = {})[name] = [target.slice(0)];
                }
            }

            return this[key];
        }

    }, function (name, key, convertor) {

        var watches = yaxi.watches;

        return function (value) {

            var bindings;

            value = convertor(value);

            if (value !== this[key])
            {
                if (watches[name])
                {
                    this.$parent.$notify(name, value, this[key]);
                }

                this[key] = value;

                if ((bindings = this.__bindings) && (bindings = bindings[name]))
                {
                    notify_binding.call(this, value, bindings);
                }
            }
        }

    });



    function notify_binding(value, bindings) {

        for (var i = bindings.length; i--;)
        {
            var binding = bindings[i],
                target = binding[0],
                fn;

            if (target.destroyed)
            {
                bindings.splice(i, 1);
            }
            else if (fn = binding[2])
            {
                target[binding[1]] = fn.call(target, value);
            }
            else
            {
                target[binding[1]] = value;
            }
        }
    }



    function createTarget(model, containers, list, fn, index) {

        var start = 0,
            container,
            template,
            bindings,
            items,
            item,
            type,
            any;

        while (container = containers[start++])
        {
            if (template = container.template)
            {
                if (type = template.Class)
                {
                    if (typeof type === 'string')
                    {
                        type = classes[type] || container.$subtype;
                    }
                }
                else
                {
                    type = container.$subtype;
                }
                
                bindings = template.bindings;
                items = fn === 'splice' ? [index, 0] : [];

                for (var i = 0, l = list.length; i < l; i++)
                {
                    any = list[i];

                    item = new type(template);
                    item.__m_index = any.__index;

                    if (bindings)
                    {
                        initBindings(any, item, bindings);
                    }

                    items.push(item);
                }

                if (any = container.children)
                {
                    any[fn].apply(any, items);
                }
            }
        }
    }


    function initBindings(model, target, bindings) {

        var bt = bindingTarget;

        bt[0] = target;
        
        for (var name in bindings)
        {
            var binding = bindings[name];

            if (typeof binding === 'function')
            {
                bt[2] = binding;
                target[name] = binding.call(model);
            }
            else
            {
                bt[1] = binding;
                target[name] = model[binding];
            }
        }

        bt[0] = null;
    }


    function removeTarget(containers, list, index) {

    }



})(yaxi);
