yaxi.Observe = Object.extend.call({}, function (Class) {



    // 更新队列
    var updateList = [];

    var delay = 0;

    
    var uuid = 1;




    yaxi.components = Object.create(null);


    yaxi.watches = Object.create(null);




    function update() {

        var list = updateList,
            item,
            storage;

        for (var i = 0, l = list.length; i < l; i++)
        {
            if ((item = list[i]) && (storage = item.__storage))
            {
                item.$patch(storage);
            }
        }

        delay = list.length = 0;
    }


    function patch(target) {

        if (!delay)
        {
            delay = setTimeout(update);
        }

        updateList.push(target);

        return target.__storage = {};
    }




    Class.ctor = function (data) {

        this.$uuid = uuid++;

        if (data)
        {
            var storage = this.__storage = {},
                convert;

            for (var name in data)
            {
                if (convert = this['__c_' + name])
                {
                    if (typeof convert !== 'function')
                    {
                        this[convert](data[name]);
                    }
                    else
                    {
                        storage[convert.alias] = convert(data[name]);
                    }
                }
                else if (convert !== false)
                {
                    storage[name] = data[name];
                }
            }
        }
    }


    Class.register = function (name) {

        if (name)
        {
            yaxi.components[this.typeName = this.prototype.typeName = name] = this;
        }

        return this;
    }


    

    function to_boolean(value) {
        
        return !!value;
    }


    function to_integer(value) {

        return value | 0;
    }


    function to_number(value) {

        return +value || 0;
    }


    function to_string(value) {

        return '' + value;
    }


    function to_date(value) {

        return new Date(value);
    }


    function to_object(value) {

        return value;
    }


    function build(name, options) {

        var type = options.type,
            defaultValue = options.defaultValue,
            convertor = options.convertor,
            alias = options.alias || (options.alias = name),
            key = '__v_' + name;

        if (defaultValue === void 0)
        {
            options.defaultValue = defaultValue = null;
        }

        if (!type)
        {
            options.type = type = typeof defaultValue;
        }

        switch (type)
        {
            case 'boolean':
                this[key] = defaultValue;
                options.get = build_value_get(key, alias);
                options.set = build_value_set(name, key, alias, convertor || (convertor = to_boolean));
                break;

            case 'int':
            case 'integer':
                this[key] = defaultValue;
                options.get = build_value_get(key, alias);
                options.set = build_value_set(name, key, alias, convertor || (convertor = to_integer));
                break;

            case 'number':
                this[key] = defaultValue;
                options.get = build_value_get(key, alias);
                options.set = build_value_set(name, key, alias, convertor || (convertor = to_number));
                break;

            case 'string':
                this[key] = defaultValue;
                options.get = build_value_get(key, alias);
                options.set = build_value_set(name, key, alias, convertor || (convertor = to_string));
                break;

            case 'date':
                this[key] = defaultValue;
                options.get = build_value_get(key, alias);
                options.set = build_value_set(name, key, alias, convertor || (convertor = to_date));
                break;

            default:
                this[key] = convertor = null;
                options.get = build_value_get(key, alias);
                options.set = build_value_set(name, key, alias, to_object);
                break;
        }

        if (convertor)
        {
            convertor.alias = alias;
            this['__c_' + name] = options.convertor = convertor;
        }
        
        this['__o_' + name] = options;
    }



    function build_value_get(key, alias) {

        return function () {

            var value = this.__storage;
            return value && (value = value[alias]) !== void 0 ? value : this[key];
        }
    }

    
    function build_value_set(name, key, alias, convertor) {

        var watches = yaxi.watches;

        return function (value) {

            var storage = this.__storage,
                oldValue;

            value = convertor(value);

            if (storage)
            {
                if (value === (oldValue = storage[alias]))
                {
                    return;
                }
    
                if (value !== this[key])
                {
                    storage[alias] = value;
                }
                else
                {
                    delete storage[alias];
                }
            }
            else
            {
                (storage = patch(this))[alias] = value;
            }

            if (watches[name])
            {
                this.$notify(name, value, oldValue !== void 0 ? oldValue : this[key]);
            }
        }
    }



    // 定义属性
    this.$properties = function (properties) {

        if (properties)
        {
            var define = Object.defineProperty;

            for (var name in properties)
            {
                var item = properties[name];

                if (item == null)
                {
                    item = { defaultValue: null };
                }
                else if (typeof item !== 'object')
                {
                    item = { defaultValue: item };
                }
                
                build.call(this, name, item);

                define(this, name, item);
            }
        }
    }




    this.$watch = function (name, listener) {

        if (name && typeof listener === 'function')
        {
            var watches = yaxi.watches,
                keys = watches[name] || (watches[name] = {}),
                id = this.$uuid;

            (keys[id] || (keys[id] = [])).push(listener);
        }
    }


    this.$unwatch = function (name, listener) {

        var watches = yaxi.watches,
            id = this.$uuid,
            keys,
            items;

        if (!name)
        {
            for (name in watches)
            {
                delete watches[name][id];
            }
        }
        else if (keys = watches[name])
        {
            if (listener)
            {
                if (items = keys[name])
                {
                    for (var i = items.length; i--;)
                    {
                        if (items[i] === listener)
                        {
                            items.splice(i, 1);
                        }
                    }

                    if (!items.length)
                    {
                        keys[name] = null;
                    }
                }
            }
            else
            {
                keys[name] = null;
            }
        }
    }


    this.$notify = function (source, name, value, oldValue) {

        var keys = yaxi.watches[name];

        if (keys)
        {
            var target = arguments[3] || this,
                items,
                index,
                event,
                fn;

            do
            {
                if (items = keys[target.$uuid])
                {
                    index = 0;

                    while (fn = items[index++])
                    {
                        if (!event)
                        {
                            event = {
                                target: source,
                                name: name,
                                value: value,
                                oldValue: oldValue
                            };
                        }

                        if (fn.call(this, event) === false)
                        {
                            return false;
                        }
                    }
                }
            }
            while (target = target.$parent);
        }
        
        return true;
    }




    // 属性变更处理
    this.$patch = function (storage) {

        this.__storage = null;

        for (var name in storage)
        {
            this['__v_' + name] = storage[name];
        }
    }


    // 事件变更处理
    this.__event_change = function (type, items, on) {

        // 刚注册或已注销完毕才注册事件变更
        var value = on ? !items[1] : !item || !item[0];

        if (value)
        {
            var events = this.__events,
                storage;

            if (events)
            {
                if (storage = events.storage)
                {
                    storage[type] = value;
                }
                else
                {
                    patch(events);
                    (events.storage = {})[type] = value;
                }
            }
            else
            {
                patch(this.__events = {

                    owner: this,
                    storage: storage = {},
                    $patch: this.__event_patch
                });

                storage[type] = value;
            }
        }
    }


    // 自定义事件更新逻辑
    this.__event_patch = function (storage) {

        this.storage = null;
    }


});
