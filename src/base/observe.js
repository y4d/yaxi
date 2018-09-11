yaxi.Observe = Object.extend.call({}, function (Class) {


    
    var patches = yaxi.__patches = [];


    var uuid = 1;




    Class.ctor = function (data) {

        this.$uuid = uuid++;

        if (data)
        {
            var changes = this.__changes = {},
                convert;

            for (var name in data)
            {
                if (convert = this['__c_' + name])
                {
                    if (typeof convert !== 'function')
                    {
                        if (convert === true)
                        {
                            this['__init_' + name](data[name]);
                        }
                        else
                        {
                            this[convert] = data[name];
                        }
                    }
                    else
                    {
                        changes[this['__a_' + name]] = convert(data[name]);
                    }
                }
                else if (convert !== false)
                {
                    changes[name] = data[name];
                }
            }
        }
    }



    // 不处理Class属性
    this.__c_Class = false;



    
    // 定义属性
    this.$properties = yaxi.__extend_properties(function (name, key, alias) {

        return function () {

            var value;
            return (value = this.__changes) && (value = value[alias]) !== void 0 ? value : this[key];
        }

    }, function (name, key, convertor, alias) {

        var watches = yaxi.watches;

        return function (value) {

            var changes = this.__changes,
                any;

            value = convertor(value);

            if (changes)
            {
                if (value === (any = changes[alias]))
                {
                    return;
                }
    
                if (value !== this[key])
                {
                    changes[alias] = value;
                }
                else
                {
                    delete changes[alias];
                }
            }
            else
            {
                (changes = patch(this))[alias] = value;
            }

            if (watches[name])
            {
                this.$notify(name, value, any !== void 0 ? any : this[key]);
            }
        }

    });



    // 扩展watch支持
    yaxi.__extend_watch(this, '');




    // 更新变更
    patches.update = update;

    

    function update() {

        var list = patches,
            item;

        for (var i = 0, l = list.length; i < l; i++)
        {
            if (item = list[i])
            {
                item.__update_patch();
            }
        }

        list.length = list.delay = 0;
    }


    function patch(target) {

        var list = patches;

        if (!list.delay)
        {
            list.delay = setTimeout(update);
        }

        list.push(target);

        return target.__changes = {};
    }


    
    this.__update_patch = function () {

        var changes = this.__changes;

        this.__changes = null;

        for (var name in changes)
        {
            this['__v_' + name] = changes[name];
        }

        return changes;
    }



    // 事件变更处理
    this.__event_change = function (type, items, on) {

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
                }
                else
                {
                    patch(events);
                    (events.__changes = {})[type] = value;
                }
            }
            else
            {
                patch(this.__events = events = {

                    owner: this,
                    __update_patch: this.__event_patch
                });

                events.__changes[type] = value;
            }
        }
    }



});
