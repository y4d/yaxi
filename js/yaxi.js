var yaxi = Object.create(null);



yaxi.classes = Object.create(null);


yaxi.watches = Object.create(null);




Object.extend = function (fn) {
	
    var base = this.prototype || null,
        prototype = Object.create(base),
        ctor;

    function Class() {
		
		if (ctor)
		{
			ctor.apply(this, arguments);
		}
	}
	
	prototype.constructor = Class;

    Class.ctor = this.ctor;
    Class.register = this.register;
    Class.extend = this.extend || Object.extend;
    Class.prototype = prototype;

    if (fn)
    {
        fn.call(prototype, Class, base);
    }

    ctor = Class.ctor;
	
	return Class;
}





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
            this['__a_' + name] = alias;
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





yaxi.Event = Object.extend(function (Class) {


    
    this.type = '';


    this.target = null;


    this.cancelBubble = false;

    
    this.defaultPrevented = false;



    this.stop = function () {

        this.cancelBubble = true;
    }


    this.prevent = function () {

        this.defaultPrevented = true;
    }

    
});



yaxi.EventTarget = Object.extend(function (Class) {

    
    var Event = yaxi.Event;
    

    this.on = function (type, listener) {
        
        if (type && typeof listener === 'function')
        {
            var events = this.__event_keys,
                items;

            if (events)
            {
                if (items = events[type])
                {
                    items.push(listener);
                }
                else
                {
                    items = events[type] = [listener];
                }
            }
            else
            {
                events = this.__event_keys = {};
                items = events[type] = [listener];
            }
            
            this.__event_change(type, items, true);
        }
    }


    this.once = function (type, listener) {

        if (typeof listener === 'function')
        {
            function callback(event) {

                listener.call(this, event);
                this.off(type, callback);
            }

            this.on(type, callback);
        }
    }


    this.off = function (type, listener) {
        
        var events = this.__event_keys,
            items;

        if (!events)
        {
            return;
        }

        if (!type)
        {
            for (type in events)
            {
                this.off(type);
            }
        }
        else if (items = events[type])
        {
            if (listener)
            {
                for (var i = items.length; i--;)
                {
                    if (items[i] === listener)
                    {
                        items.splice(i, 1);
                    }
                }

                if (!items[0])
                {
                    events[type] = null;
                }
            }
            else
            {
                items.length = 0;
                events[type] = null;
            }

            this.__event_change(type, items, false);
        }
    }


    this.trigger = function (type, payload) {
        
        var target = this,
            events,
            index,
            event,
            fn;

        do
        {
            if ((events = target.__event_keys) && (events = events[type]))
            {
                index = 0;

                while (fn = events[index++])
                {
                    if (!event)
                    {
                        event = new Event();
                        event.target = this;

                        if (payload)
                        {
                            for (var name in payload)
                            {
                                event[name] = payload[name];
                            }
                        }
                    }

                    if (fn.call(target, event) === false)
                    {
                        event.defaultPrevented = true;
                    }
    
                    if (event.cancelBubble)
                    {
                        return !event.defaultPrevented;
                    }
                }
            }
        }
        while (target = target.$parent);

        return !event || !event.defaultPrevented;
    }



    this.__event_change = function (type, items, on) {
    }


});




(function () {


	
	// 触摸开始事件参数
	var start = {};



	function longTagDelay() {
		
		var target = start.target;
		
		if (target)
		{
			var event = document.createEvent('HTMLEvents');
		
			start.delay = 0;
			start.target = null;
			
			event.initEvent('longTap', true, true);
			target.dispatchEvent(event);
		}
	}


	function clearLongTap() {
		
		clearTimeout(start.delay);
		
		start.delay = 0;
		start.target = null;
	}


	document.addEventListener('touchstart', function (e) {
		
		var touch = e.changedTouches[0];
		
		start.clientX = touch.clientX;
		start.clientY = touch.clientY;
		start.swipe = false;
		start.target = e.target;
		start.delay = setTimeout(longTagDelay, 600);
	});


	document.addEventListener('touchmove', function (e) {
		
		if (start.delay)
		{
			var event = document.createEvent('HTMLEvents'),
				touch = e.changedTouches[0],
				offsetX = touch.clientX - start.clientX,
				offsetY = touch.clientY - start.clientY;
			
			// 初始化事件类型，是否冒泡，是否阻止浏览器的默认行为
			event.initEvent('slide', true, true);
				
			event.clientX = touch.clientX;
			event.clientY = touch.clientY;
			event.offsetX = offsetX;
			event.offsetY = offsetY;
			
			e.target.dispatchEvent(event);
			
			if (!start.swipe && (offsetX < -8 || offsetX > 8 || offsetY < -8 || offsetY > 8))
			{
				clearLongTap();
				start.swipe = true;
			}
		}
	});
		

	document.addEventListener('touchend', function (e) {
		
		if (start.delay)
		{
			var event = document.createEvent('HTMLEvents'),
				touch = e.changedTouches[0],
				offsetX = touch.clientX - start.clientX,
				offsetY = touch.clientY - start.clientY;
				
			clearLongTap();
			
			if (start.swipe || (offsetX < -8 || offsetX > 8 || offsetY < -8 || offsetY > 8))
			{
				event.initEvent('swipe', true, true);
				event.offsetX = offsetX;
				event.offsetY = offsetX;
			}
			else
			{
				// 初始化事件类型，是否冒泡，是否阻止浏览器的默认行为
				event.initEvent('tap', true, true);
			}
			
			event.clientX = touch.clientX;
			event.clientY = touch.clientY;
			
			e.target.dispatchEvent(event);
		}
	});


	document.addEventListener('touchcancel', clearLongTap);



})();




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




(function (yaxi) {



    var base = Array.prototype;

    var prototype = (yaxi.ObserveArray = ObserveArray).prototype = Object.create(base);

    var classes = yaxi.classes;

    var patches = yaxi.__patches;




    function patch(target) {

        if (!patches.delay)
        {
            patches.delay = setTimeout(patches.update);
        }

        patches.push(target);
        target.__changed = 1;
    }

     

    function ObserveArray(owner, data) {

        var length;
    
        this.owner = owner;
    
        if (data && (length = data.length) > 0)
        {
            var Class = owner.$subtype,
                index = 0,
                item;
    
            for (var i = 0; i < length; i++)
            {
                item = data[i];
    
                if (item instanceof Class)
                {
                    item.__last_index = null;
                }
                else
                {
                    item = item ? createItem(Class, item) : new Class();
                }
    
                item.$parent = owner;
                this[index++] = item;
            }
    
            this.length = index;
        }
    }



    function createItem(Class, data) {

        var type;

        if ((type = data.Class) && typeof type === 'string')
        {
            type = classes[type];
        }

        return new (type || Class)(data);
    }


    function checkItems(self, items, list, index) {

        var owner = self.owner,
            Class = owner.$subtype || yaxi.Observe,
            length = items.length;

        while (index < length)
        {
            var item = items[index++];
            
            if (!(item instanceof Class))
            {
                item = item ? createItem(Class, item) : new Class();
            }

            item.$parent = owner;

            list.push(item);
        }

        self.__changed || patch(self);

        return list;
    }
    


    prototype.length = 0;


    prototype.push = function () {

        if (arguments.length > 0)
        {
            return base.push.apply(this, checkItems(this, arguments, [], 0));
        }

        return this.length;
    }


    prototype.pop = function () {

        var item = base.pop.call(this);

        if (item)
        {
            item.$parent = null;

            this.__changed || patch(this);

            if (this.__original)
            {
                var changes = this.__changes;

                if (changes)
                {
                    changes.push(item);
                }
                else
                {
                    this.__changes = [item];
                }
            }
        }

        return item;
    }


    prototype.unshift = function () {

        if (arguments.length > 0)
        {
            return base.unshift.apply(this, checkItems(this, arguments, [], 0));
        }

        return this.length;
    }


    prototype.shift = function () {

        var item = base.shift.call(this);

        if (item)
        {
            item.$parent = null;

            this.__changed || patch(this);

            if (this.__original)
            {
                var changes = this.__changes;

                if (changes)
                {
                    changes.push(item);
                }
                else
                {
                    this.__changes = [item];
                }
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
                list = checkItems(this, arguments, [index, length], 2);
                list = base.splice.apply(this, list);
                break;
        }

        if (list.length > 0)
        {
            for (var i = list.length; i--;)
            {
                list[i].$parent = null;
            }

            this.__changed || patch(this);

            if (this.__original)
            {
                var changes = this.__changes;

                if (changes)
                {
                    changes.push.apply(changes, list);
                }
                else
                {
                    this.__changes = list;
                }
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

            this.__changed || patch(this);

            if (this.__original)
            {
                var changes = this.__changes;

                if (changes)
                {
                    changes.push.apply(changes, list);
                }
                else
                {
                    this.__changes = list;
                }
            }
        }

        return list;
    }


    prototype.sort = function (sortby) {

        if (this.length > 0)
        {
            base.sort.call(this, sortby);
            this.__changed || patch(this);
        }

        return this;
    }


    prototype.reverse = function () {

        if (this.length > 0)
        {
            base.reverse.call(this);
            this.__changed || patch(this);
        }

        return this;
    }




    prototype.getChanges = function () {
                
        var original = this.__original,
            items,
            item1,
            item2;

        if (!original)
        {
            return null;
        }
    
        if (changes = this.__changes)
        {
            item1 = this.owner;

            for (var i = changes.length; i--;)
            {
                item2 = changes[i];

                // 新创建或重新加进来的不处理移除变更
                if (item2.__last_index != null && item2.$parent !== item1)
                {
                    if (items)
                    {
                        items.push(item2);
                    }
                    else
                    {
                        items = [item2];
                    }
                }
            }

            if (items)
            {
                changes = [items, null];
                items = null;
            }
        }
        
        if (!changes)
        {
            changes = [null, null];
        }
            
        for (var i = this.length; i--;)
        {
            item1 = original[i];
            item2 = this[i];

            if (item1 !== item2)
            {
                // 节点当前索引
                item2.__change_index = i;

                // 新添加的节点没有index
                if (item2.__last_index == null)
                {
                    if (items)
                    {
                        items.push(item2);
                    }
                    else
                    {
                        items = changes[1] = [item2];
                    }
                }
                else // 节点顺序发生变化
                {
                    changes.push(item2);
                }
            }
        }

        return changes;
    }



    prototype.__update_patch = prototype.commit = function () {

        var length = this.length;

        if (length > 0)
        {
            var original = this.__original;
            
            if (original)
            {
                original.splice(length);
            }
            else
            {
                original = this.__original = [];
            }

            for (var i = 0; i < length; i++)
            {
                (original[i] = this[i]).__last_index = i;
            }
        }
        else
        {
            this.__original = null;
        }

        this.__changes = null;
        this.__changed = 0;
    }



})(yaxi);




yaxi.Style = yaxi.Observe.extend(function (Class, base) {
    


    this.$properties((function () {

        var properties = {},
            style = document.documentElement.style,
            regex = /^(?:webkit|ms|moz|o)([A-Z])/;

        function replace(_, key) {

            return key.toLowerCase();
        }

        for (var name in style)
        {
            switch (name)
            {
                case 'cssFloat':
                case 'styleFloat':
                    properties.float = { alias: name, defaultValue: '' };
                    break;

                case 'cssText':
                    break;

                default:
                    properties[name.replace(regex, replace)] = { alias: name, defaultValue: '' };
                    break;
            }
        }

        return properties;

    })());




    this.__update_patch = function () {

        var changes = base.__update_patch.call(this),
            style = this.owner.$dom;

        if (style && (style = style.style))
        {
            for (var name in changes)
            {
                style[name] = changes[name];
            }
        }

        return changes;
    }


});




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




yaxi.Panel = yaxi.Control.extend(function (Class, base) {

    
    

    yaxi.template(this, '<div class="yx-control yx-panel"></div>');



    this.$subtype = yaxi.Control;




    this.$properties({

        layout: ''
    });



    Object.defineProperty(this, 'children', {

        get: function () {

            return this.__init_children();
        }
    });




    this.__c_children = true;

    
    this.__init_children = function (data) {

        var children = this.__children;

        if (!children)
        {
            children = this.__children = new yaxi.ObserveArray(this, data);

            children.__changed = 1;
            children.__update_patch = childrenPatch;
    
            Object.defineProperty(this, 'children', {
    
                value: children,
                writable: false
            });
        }

        return children;
    }



    // 指定默认子类型
    this.__c_subtype = '$subtype';

    this.__set_subtype = false;



    // 模型
    this.model = null;


    this.__c_model = true;

    this.__set_model = false;


    this.__init_model = function (model) {

        if (model)
        {
            (this.model = model instanceof yaxi.Model ? model : new yaxi.Model(model)).bind(this);
        }
    }


    // 模板
    this.template = null;


    this.__c_template = true;

    this.__set_template = false;


    this.__init_template = function (template) {

        this.template = template;
    }

    

    this.destroy = function () {

        var children = this.__children;

        if (children)
        {
            for (var i = children.length; i--;)
            {
                children[i].destroy();
            }
        }

        base.destroy.call(this);
    }





    this.__set_layout = function (dom, value) {

        var classList = dom.classList,
            layout = this.__layout;

        if (layout)
        {
            classList.remove(layout);
        }

        classList.add(this.__layout = 'yx-layout-' + value);
    }


    this.update = function () {

        var dom = base.update.call(this),
            children = this.__children;

        if (children)
        {
            for (var i = 0, l = children.length; i < l; i++)
            {
                dom.appendChild(children[i].update());
            }

            children.commit();
        }
        else
        {
            this.children.__changed = 0;
        }

        return dom;
    }



    function childrenPatch() {

        var changes = this.getChanges(),
            list,
            item;

        if (!changes)
        {
            this.owner.update();
            return;
        }

        if (list = changes[0])
        {
            removeChildNodes(list);
        }

        if (list = changes[1])
        {
            var dom = this.owner.$dom;

            for (var i = list.length; i--;)
            {
                if (!(item = list[i]).$dom)
                {
                    dom.appendChild(item.update());
                }
            }

            if (changes[2])
            {
                changes = changes.slice(2);
                changes.push.apply(changes, list);
            }
            else
            {
                changes = list;
            }

            sortChildNodes(dom, changes);
        }
        else if (changes[2])
        {
            sortChildNodes(this.owner.$dom, changes.slice(2));
        }

        this.commit();
    }


    function sortChildNodes(dom, items) {

        var nodes = dom.children,
            item;

        items.sort(sortFn);

        for (var i = items.length; i--;)
        {
            item = items[i];
            dom.insertBefore(item.$dom, nodes[item.__change_index])
        }
    }


    function sortFn(a, b) {

        return a.__change_index - b.__change_index;
    }


    function removeChildNodes(items) {

        for (var i = items.length; i--;)
        {
            var item = items[i],
                dom = item.$dom,
                any;

            if (dom && (any = dom.parentNode))
            {
                any.removeChild(dom);
            }

            // 如果没有父节点且不缓存则销毁组件
            if (!item.$parent && !item.cached)
            {
                item.$dom = dom.$control = null;

                if (item.destroy)
                {
                    item.destroy();
                }
            }
        }
    }



}).register('Panel');





yaxi.Button = yaxi.Control.extend(function (Class, base) {


    yaxi.template(this, '<span class="yx-control yx-button" tabindex="0"><span class="yx-button-icon"></span><span></span></span>');


    this.$properties({

        // 文本内容
        text: '',

        // 按钮类型 default | primary | success | info | warn | danger
        type: 'default',

        // 图标类名
        icon: '',

        // svg图标id
        svg: '',

        // 是否朴素按钮
        plain: false,

        // 图标和文字是否竖排
        vertical: false,

        // 是否默认聚焦
        autofocus: false,

        // 是否加载中状态
        loading: false
    });
    



    
    this.__set_type = function (dom, value) {

        dom.className = control.__class1 + (control.__class2 = value ? ' yx-button-' + value : '') + control.__class3; 
    }


    this.__set_icon = function (dom, value) {

        dom.firstChild.className = 'yx-button-icon' + (value ? ' ' + value : '');
    }


    this.__set_svg = function (dom, value) {

        dom.firstChild.innerHTML = value ? '<svg aria-hidden="true"><use xlink:href="#' + value + '"></use></svg>' : '';
    }


    this.__set_plain = function (dom, value) {

        if (value)
        {
            dom.setAttribute('plain', 1);
        }
        else
        {
            dom.removeAttribute('plain');
        }
    }
    
    
    this.__set_vertical = function (dom, value) {

        value = value ? 'block' : '';

        dom.firstChild.style.display = value;
        dom.lastChild.style.display = value;
    }


    this.__set_loading = function (dom, value) {

        dom = dom.firstChild;

        if (value)
        {
            dom.setAttribute('loading', 1);
        }
        else
        {
            dom.removeAttribute('loading');
        }
    }


    this.__set_autofocus = function (dom, value) {

        if (value)
        {
            dom.focus();
        }
    };


    this.__set_text = function (dom, value) {

        dom.lastChild.textContent = value;
    }



}).register('Button');




yaxi.FloatLayer = yaxi.Panel.extend(function (Class, base) {
	
	
	
	var stack = [];
	
	
	
	document.addEventListener('touchstart', function (event) {
		
		var layer = stack[stack.length - 1];
		
		if (layer)
		{
			var root = layer.dom,
				node = event.target;
				
			while (node)
			{
				if (node === root)
				{
					return;
				}
				
				node = node.parentNode;
			}
				
			layer.close();
			
			event.stopPropagation();
			event.preventDefault();
			
			return false;
		}
		
	}, true);
	
	
	
	
	this.show = function (reference, offset) {
		
		var rect = reference.getBoundingClientRect(),
			offsetX = offset ? (offset.x | 0) : 0,
			offsetY = offset ? (offset.y | 0) : 0;
		
		this.showAt(rect.left + offsetX, rect.top + reference.offsetHeight + offsetY);
	}
	
	
	
	this.showAt = function (x, y) {
		
		if (stack.indexOf(this) < 0)
		{
			var dom = this.$dom || this.update(),
				style = dom.style;
				
			style.left = x > 0 ? x + 'px' : x;
			style.top = y > 0 ? y + 'px' : y;
			
			document.body.appendChild(dom);
			
			stack.push(this);
		}
	}
	
	
	
	this.close = function () {
		
		var layer = stack.pop();
		
		if (layer)
		{
			var dom = this.dom,
				parent = dom.parentNode;
				
			if (parent)
			{
				parent.removeChild(dom);
			}
		}
	}
	
	
	
});





yaxi.IconButton = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<span class="yx-control yx-iconbutton"><span class="icon"></span><span></span></span>');



    this.$properties({

        // 文本内容
        text: '',

        // 图标类名
        icon: '',

        // svg图标id
        svg: ''
    });
    



    this.__set_icon = function (dom, value) {

        dom.firstChild.className = 'icon' + (value ? ' ' + value : '');
    }


    this.__set_svg = function (dom, value) {

        dom.firstChild.innerHTML = value ? '<svg aria-hidden="true"><use xlink:href="#' + value + '"></use></svg>' : '';
    }


    this.__set_text = function (dom, value) {

        dom.lastChild.textContent = value;
    }



}).register('IconButton');








yaxi.Page = yaxi.Panel.extend(function (Class, base) {



	yaxi.template(this, '<div class="yx-control yx-page"></div>');



	this.open = function (options) {
				
		var opener = Class.current || null;
		
		if (this.onopening(options) !== false)
		{
			document.body.appendChild(this.$dom || this.update());
			
		    this.opener = opener;
			this.onopened(options);
			
			if (opener)
			{
				opener.$dom.style.display = 'none';
				opener.onhide();
			}
			
			this.trigger('opened');
			
			Class.current = this;
			
			return true;
		}

		return false;
	}
	
	
	this.close = function (closeType) {
		
		if (this.onclosing(closeType) !== false)
		{
			var opener = this.opener || null,
				dom = this.$dom;
			
			this.onclosed(closeType);
			this.opener = null;
			
			if (dom.parentNode)
			{
				dom.parentNode.removeChild(dom);
			}
			
			if (opener)
			{
				opener.$dom.style.display = '';
				opener.onshow();
			}

			Class.current = opener;
			
			this.trigger('closed', { closeType: closeType });
			
			return true;
		}
		
		return false;
	}
	
	
	this.onopening = function (options) {
		
	}
	
	
	this.onopened = function (options) {
		
	}
	
	
	this.onclosing = function (closeType) {
		
	}
	
	
	this.onclosed = function (closeType) {
		
	}


	this.onshow = function () {

	}


	this.onhide = function () {

    }
    
    
}).register('Page');




yaxi.Text = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-text"></span>');

    

});
