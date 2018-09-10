var yaxi = Object.create(null);



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

    var Events = Event.all;

    

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
                        event = new (Events[type] || Event)();
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




(function (yaxi) {



    var base = Array.prototype;

    var prototype = (yaxi.ObserveArray = ObserveArray).prototype = Object.create(base);

    var components = yaxi.components;


    
    // 更新队列
    var updateList = [];

    var delay = 0;



    function update() {

        var list = updateList,
            item,
            changes;

        for (var i = 0, l = list.length; i < l; i++)
        {
            item = list[i];
  
            if (changes = item.$changes())
            {
                item.$patch(changes);
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

        target.__changed = 1;
    }

     

    function ObserveArray(owner, data) {

        var length;
    
        this.owner = owner;
    
        if (data && (length = data.length) > 0)
        {
            var Class = owner.$subtype || yaxi.Observe,
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

        if (type = data.Class)
        {
            delete data.Class;

            if (typeof type === 'string')
            {
                type = components[type];
            }
        }

        return new (type || Class)(data);
    }


    function checkItems(self, items, list, index) {

        var owner = self.owner,
            Class = owner.$subtype || yaxi.Observe,
            length = items.length;

        while (index < length)
        {
            item = items[index++];
            
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




    prototype.$changes = function () {

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



    prototype.$patch = function (changes) {

        this.$commit();
    }


    prototype.$commit = function () {

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




    this.$patch = function (storage) {

        var style = this.owner.$dom;

        if (style && (style = style.style))
        {
            for (var name in storage)
            {
                style[name] = storage[name];
            }

            base.$patch.call(this, storage);
        }
    }


});




yaxi.Control = yaxi.Observe.extend(function (Class, base) {


    
    var eventTarget = yaxi.EventTarget.prototype;



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
            data;

        if (data = this.__storage)
        {
            this.$patch(data);
        }

        if (data = this.__style)
        {
            data.$patch(data.__storage);
        }

        return dom;
    }


    this.$patch = function (storage) {

        var dom = this.$dom;

        for (var name in storage)
        {
            (this['__set_' + name] || updateDom).call(this, dom, storage[name], name);
        }

        base.$patch.call(this, storage);
    }



    function updateDom(dom, value, name) {

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
    this.__event_patch = function (storage) {

        var control = this.owner,
            dom = owner.$dom;

        if (dom)
        {
            for (var name in storage)
            {
                if (storage[name])
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

        this.storage = null;
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




yaxi.Panel = yaxi.Control.extend(function (Class, base) {

    
    
    var ObserveArray = yaxi.ObserveArray;

    var fragment = document.createDocumentFragment();




    this.$subtype = yaxi.Control;



    Object.defineProperty(this, 'children', {

        get: function () {

            return this.__init_children();
        }
    });



    this.__c_children = '__init_children';
    
    
    this.__init_children = function (data) {

        var children = this.__children;

        if (!children)
        {
            children = this.__children = new ObserveArray(this, data);

            children.__changed = 1;
            children.$patch = childrenPatch;
    
            Object.defineProperty(this, 'children', {
    
                value: children,
                writable: false
            });
        }

        return children;
    }




    this.update = function () {

        var dom = base.update.call(this),
            children = this.__children;

        if (children)
        {
            var host = fragment;

            for (var i = 0, l = children.length; i < l; i++)
            {
                host.appendChild(children[i].update());
            }

            dom.appendChild(host);
            children.$commit();
        }

        return dom;
    }



    function childrenPatch(changes) {

        var list, item;

        if (list = changes[0])
        {
            removeChildNodes(list);
        }

        if (list = changes[1])
        {
            var host = fragment,
                dom = this.owner.$dom;

            for (var i = list.length; i--;)
            {
                if (!(item = list[i]).$dom)
                {
                    host.appendChild(item.update());
                }
            }

            if (changes[2])
            {
                changes = changes.slice(2);
                changes.push.apply(list, changes);
            }
            else
            {
                changes = list;
            }

            dom.appendChild(host);
            sortChildNodes(dom, changes);
        }
        else if (changes[2])
        {
            sortChildNodes(this.owner.$dom, changes.slice(2));
        }

        this.$commit();
    }


    function sortChildNodes(dom, items) {

        var nodes = dom.children,
            item;

        items.sort(sortFn);

        for (var i = items.length; i--;)
        {
            item = items[i];
            dom.replaceChild(item.$dom, nodes[item.__change_index])
        }
    }


    function sortFn(a, b) {

        return a.__change_index > b.__change_index;
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


    this.destroy = function () {

        var children = this.__children;

        if (children)
        {
            for (var i = children.length; i--;)
            {
                var control = children[i],
                    dom;
    
                if (dom = control.$dom)
                {
                    dom.$control = control.$dom = null;
                }
    
                if (control.destroy)
                {
                    control.destroy();
                }
            }
        }
    }



}).register('Panel');





yaxi.Button = yaxi.Control.extend(function (Class, base) {


    yaxi.template(this, '<input type="button"></input>');


    this.$properties({

        'text': { alias: 'value', defaultValue: '' }
    });
    

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
