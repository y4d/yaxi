yaxi.__extend_properties = function (get, set) {



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
                options.get = get(name, key, alias);
                options.set = set(name, key, convertor || (convertor = to_boolean), alias);
                break;

            case 'int':
            case 'integer':
                this[key] = defaultValue;
                options.get = get(name, key, alias);
                options.set = set(name, key, convertor || (convertor = to_integer), alias);
                break;

            case 'number':
                this[key] = defaultValue;
                options.get = get(name, key, alias);
                options.set = set(name, key, convertor || (convertor = to_number), alias);
                break;

            case 'string':
                this[key] = defaultValue;
                options.get = get(name, key, alias);
                options.set = set(name, key, convertor || (convertor = to_string), alias);
                break;

            case 'date':
                this[key] = defaultValue;
                options.get = get(name, key, alias);
                options.set = set(name, key, convertor || (convertor = to_date), alias);
                break;

            default:
                this[key] = convertor = null;
                options.get = get(name, key, alias);
                options.set = set(name, key, to_object, alias);
                break;
        }

        if (convertor)
        {
            convertor.alias = alias;
            this['__c_' + name] = options.convertor = convertor;
        }
        
        this['__o_' + name] = options;
    }



    // 定义属性方法
    return function (properties) {

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



}
