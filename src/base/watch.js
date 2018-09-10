yaxi.__extend_watch = function (target, prefix) {



    prefix = prefix || '';


    
    target[prefix + 'watch'] = function (name, listener) {

        if (name && typeof listener === 'function')
        {
            var watches = yaxi.watches,
                keys = watches[name] || (watches[name] = {}),
                id = this.$uuid;

            (keys[id] || (keys[id] = [])).push(listener);
        }
    }


    target[prefix + 'unwatch'] = function (name, listener) {

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


    target[prefix + 'notify'] = function (source, name, value, oldValue) {

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

}
