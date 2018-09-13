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





    function update() {

        var list = patches,
            item,
            changes;

        for (var i = 0, l = list.length; i < l; i++)
        {
            if ((item = list[i]) && (changes = item.__check_update()))
            {
                item.__update_patch(changes);
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


    this.__check_update = function () {

        return this.__changes;
    }

    
    this.__update_patch = function (changes) {

        this.__changes = null;

        for (var name in changes)
        {
            this['__v_' + name] = changes[name];
        }
    }



    // 更新变更
    yaxi.__patch_update = update;

    // 添加补丁
    yaxi.__append_patch = patch;

    

});
