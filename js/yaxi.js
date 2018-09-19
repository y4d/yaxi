(function(window){var svgSprite='<svg><symbol id="icon-radio-checked" viewBox="0 0 1024 1024"><path d="M512 317c-107.25 0-195 87.75-195 195s87.75 195 195 195 195-87.75 195-195S619.25 317 512 317zM512 122C297.501875 122 122 297.501875 122 512s175.501875 390 390 390 390-175.501875 390-390S726.498125 122 512 122zM512 824c-171.59625 0-312-140.405625-312-312S340.40375 200 512 200 824 340.40375 824 512 683.59625 824 512 824z"  ></path></symbol><symbol id="icon-checkbox-uncheck" viewBox="0 0 1024 1024"><path d="M770.16291555 851.81667555l-516.32696888 0c-45.05031111 0-81.65262222-36.60344889-81.65262222-81.65262222l0-516.37475555c0-45.05031111 36.60344889-81.65262222 81.65262222-81.65262223l516.32696888 0c45.05031111 0 81.65262222 36.60344889 81.65262223 81.65262223l0 516.37475555c0 45.05031111-36.60344889 81.65262222-81.65262223 81.65262222zM253.83708445 220.72888889c-18.25336889 0-33.10819555 14.90375111-33.10819556 33.10819556l0 516.37475555c0 18.20444445 14.85482667 33.10819555 33.10819556 33.10819555l516.32696888 0c18.20444445 0 33.10819555-14.90375111 33.10819556-33.10819555l0-516.37475555c0-18.20444445-14.90375111-33.10819555-33.10819556-33.10819556l-516.32696888 0z"  ></path></symbol><symbol id="icon-checkbox-checked" viewBox="0 0 1024 1024"><path d="M770.16291555 851.81667555l-516.32696888 0c-45.05031111 0-81.65262222-36.60344889-81.65262222-81.65262222l0-516.37475555c0-45.05031111 36.60344889-81.65262222 81.65262222-81.65262223l516.32696888 0c45.05031111 0 81.65262222 36.60344889 81.65262223 81.65262223l0 516.37475555c0 45.05031111-36.60344889 81.65262222-81.65262223 81.65262222zM253.83708445 220.72888889c-18.25336889 0-33.10819555 14.90375111-33.10819556 33.10819556l0 516.37475555c0 18.20444445 14.85482667 33.10819555 33.10819556 33.10819555l516.32696888 0c18.20444445 0 33.10819555-14.90375111 33.10819556-33.10819555l0-516.37475555c0-18.20444445-14.90375111-33.10819555-33.10819556-33.10819556l-516.32696888 0z"  ></path><path d="M469.62005333 732.49223111l-186.12224-186.17116444 68.64327112-68.64327112 105.1488711 105.09994667 209.37500445-293.16437333 79.03118222 56.40988444z"  ></path></symbol><symbol id="icon-radio-uncheck" viewBox="0 0 1024 1024"><path d="M512 122C297.501875 122 122 297.501875 122 512s175.501875 390 390 390 390-175.501875 390-390S726.498125 122 512 122zM512 823.998125c-171.59624999 0-311.998125-140.40375001-311.998125-311.998125S340.40375001 200 512 200 824 340.40375001 824 512 683.59624999 823.998125 512 823.998125z"  ></path></symbol><symbol id="icon-checkbox-three" viewBox="0 0 1024 1024"><path d="M851.81629667 803.27111111V220.72888889a48.54518557 48.54518557 0 0 0-48.54518556-48.54518556H220.72888889a48.54518557 48.54518557 0 0 0-48.54518556 48.54518556v582.54222222a48.54518557 48.54518557 0 0 0 48.54518556 48.54518556h582.54222222a48.54518557 48.54518557 0 0 0 48.54518556-48.54518556z m-97.09037112-48.54518556H269.27407445V269.27407445h485.4518511v485.4518511z"  ></path><path d="M366.36444445 366.36444445h291.2711111v291.2711111H366.36444445z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)



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
                
                event.clientX = touch.clientX;
                event.clientY = touch.clientY;

                e.target.dispatchEvent(event);
			}
			else
			{
				// 初始化事件类型，是否冒泡，是否阻止浏览器的默认行为
                event.initEvent('tap', true, true);
                
                event.clientX = touch.clientX;
                event.clientY = touch.clientY;
                
                setTimeout(function () {

                    e.target.dispatchEvent(event);

                }, 0);
			}
			
			
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
            else if (value !== this[key])
            {
                patch(this)[alias] = value;
            }
            else
            {
                return;
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




(function (yaxi) {



    var base = Array.prototype;

    var prototype = (yaxi.ObserveArray = ObserveArray).prototype = Object.create(base);

    var classes = yaxi.classes;

    var patches = yaxi.__patches;

    var update = yaxi.__patch_update;




    function patch(target) {

        if (!patches.delay)
        {
            patches.delay = setTimeout(update);
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
            
            if (item instanceof Class)
            {
                if (item.destroyed)
                {
                    alert('the object has be destroyed, can not be reuse!');
                }
            }
            else
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




    prototype.__check_update = function () {
                
        var original = this.__original,
            items,
            item1,
            item2;

        if (!original)
        {
            return this;
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
  
                    item2.__last_index = null;
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
            this.__original = [];
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



    this.__check_update = function () {

        return this.owner.$dom && this.__changes;
    }


    this.__update_patch = function (changes) {

        var style = this.owner.$dom.style;

        for (var name in changes)
        {
            style[name] = this['__v_' + name] = changes[name];
        }

        this.__changes = null;
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




/**
 * 本部分代码从flyingon或yaxi框架中相关代码修改而来
 */

yaxi.Stream = Object.extend(function (Class) {



    Class.ctor = function (value) {

        if (arguments.length > 0)
        {
            if (typeof value === 'function')
            {
                value(this);
            }
            else
            {
                this.__cache = [value];
            }
        }
    }



    Class.fromPromise = function (promise) {

        var instance = new Class();

        if (typeof promise === 'function')
        {
            promise = promise();
        }

        promise
            .then(function (value) {

                instance.resolve(value);
            })
            .catch(function (error) {

                instance.reject(error);
            });

        return instance;
    }


    Class.fromEvent = function (dom, type, capture) {

        var instance = new Class();

        dom.addEventListener(type, function (event) {

            instance.resolve(event);

        }, capture || false);

        return instance;
    }


    Class.interval = function (period) {

        var instance = new Class();
        var value = 0;

        function interval() {

            setTimeout(function () {

                instance.resolve(value++);
                interval();

            }, period | 0);
        }

        interval();

        return instance;
    }



    this.registry = function (fn) {

        var next = (this.__next = new Class());
        var cache = this.__cache;

        this.__fn = fn;

        if (cache)
        {
            while (cache.length > 0)
            {
                try
                {
                    fn.call(this, next, cache.shift());
                }
                catch (e)
                {
                    this.reject(e);
                }
            }

            this.__cache = null;
        }

        return next;
    }



    this.resolve = function (value) {

        var any;

        if (any = this.__next)
        {
            try
            {
                this.__fn && this.__fn(any, value);
            }
            catch (e)
            {
                this.reject(e);
            }
        }
        else if (any = this.__cache)
        {
            any.push(value);
        }
        else
        {
            this.__cache = [value];
        }
    }


    this.reject = function (error) {

        var target = this,
            handle,
            fn;

        do
        {
            if ((fn = target.__error))
            {
                fn(error);
                handle = true;
            }
        }
        while ((target = target.__next));

        if (!handle)
        {
            throw error;
        }
    }


    this.then = function (fn) {

        return this.registry(function (next, value) {

            fn(value);
            next.resolve(value);
        });
    }


    this.map = function (fn) {

        return this.registry(function (next, value) {

            next.resolve(fn(value));
        });
    }


    this.catch = function (fault) {

        this.__error = fault;
        return (this.__next = new Class());
    }


    this.wait = function (time) {

        var cache = [];
        var timeout;

        return this.registry(function (next, value) {

            if (timeout)
            {
                cache.push(value);
            }
            else
            {
                timeout = setTimeout(function () {

                    next.resolve(cache);
                    timeout = 0;
                    cache = [];

                }, time | 0);
            }
        });
    }


    this.delay = function (time) {

        return this.registry(function (next, value) {

            setTimeout(function () {

                next.resolve(value);

            }, time | 0);
        });
    }


    this.debounce = function (time) {

        var timeout;

        return this.registry(function (next, value) {

            if (timeout)
            {
                clearTimeout(timeout);
            }

            timeout = setTimeout(function () {

                next.resolve(value);
                timeout = 0;

            }, time | 0);
        });
    }


    this.throttle = function (time) {

        var timeout;

        return this.registry(function (next, value) {

            if (!timeout)
            {
                next.resolve(value);

                timeout = setTimeout(function () {

                    timeout = 0;

                }, time | 0);
            }
        });
    }

    
});




/**
 * 本部分代码从flyingon或yaxi框架中相关代码修改而来
 */


// http
(function (yaxi) {



    var http = yaxi.http = Object.create(null);

    var enctype = 'application/x-www-form-urlencoded';

    
    
    function encodeData(data) {

        if (!data)
        {
            return '';
        }

        var list = [],
            encode = encodeURIComponent,
            value,
            any;

        for (var name in data)
        {
            value = data[name];
            name = encode(name);

            if (value === null)
            {
                list.push(name, '=null', '&');
                continue;
            }

            switch (typeof value)
            {
                case 'undefined':
                    list.push(name, '=&');
                    break;

                case 'boolean':
                case 'number':
                    list.push(name, '=', value, '&');
                    break;

                case 'string':
                case 'function':
                    list.push(name, '=', encode(value), '&');
                    break;

                default:
                    if (value instanceof Array)
                    {
                        for (var i = 0, l = value.length; i < l; i++)
                        {
                            if ((any = value[i]) === void 0)
                            {
                                list.push(name, '=&');
                            }
                            else
                            {
                                list.push(name, '=', encode(any), '&'); //数组不支持嵌套
                            }
                        }
                    }
                    else
                    {
                        list.push(name, '=', encodeData(value), '&');
                    }
                    break;
            }
        }

        list.pop();

        return list.join('');
    }


    
    function send(method, url, data, options) {

        var stream = new yaxi.Stream(),
            ajax = stream.ajax = new XMLHttpRequest(),
            type,
            any;

        options = options || {};
        options.method = method;
        options.url = url;
        options.data = data;
        
        if (/get|head|options/i.test(method))
        {
            if (data)
            {
                url = url + (url.indexOf('?') >= 0 ? '&' : '?') + encodeData(data);
                data = null;
            }
        }
        else if ((type = options.contentType) === enctype)
        {
            data = encodeData(data);
        }
        else if (typeof data !== 'string')
        {
            type = 'application/json';
            data = JSON.stringify(data);
        }
        
        // CORS
        if (options.CORS)
        {
            // withCredentials是XMLHTTPRequest2中独有的
            if ('withCredentials' in ajax)
            {
                ajax.withCredentials = true;
            }
            else if (any = window.XDomainRequest)
            {
                ajax = new any();
            }
        }

        ajax.onreadystatechange = function () {

            if (this.readyState === 4)
            {
                if (this.status < 300)
                {
                    var data = JSON.parse(this.responseText);

                    if (data.rcode === 200)
                    {
                        stream.resolve(data.data);
                    }
                    else
                    {
                        stream.reject(data.msg);
                    }
                }
                else
                {
                    stream.reject(this.statusText);
                }
                
                // 清除引用
                this.onreadystatechange = null;
            }
        }

        ajax.open(method, url, options.async !== false);
        
        if (type)
        {
            ajax.setRequestHeader('Content-Type', type);
            // ajax.setRequestHeader('Content-Length', data.length);
        }

        if (any = options.header)
        {
            for (var name in any)
            {
                ajax.setRequestHeader(name, any[name]);
            }
        }

        ajax.send(data);

        return stream;
    }



    http.send = function (method, url, data, options) {

        return send(method || 'GET', url, data, options);
    }


    http.head = function (url, data, options) {

        return send('HEAD', url, data, options);
    }


    http.get = function (url, data, options) {

        return send('GET', url, data, options);
    }


    http.post = function (url, data, options) {

        return send('POST', url, data, options);
    }


    http.put = function (url, data, options) {

        return send('PUT', url, data, options);
    }
    

    http.del = function (url, data, options) {

        return send('DELETE', url, data, options);
    }



})(yaxi);




(function (color) {


    color.default1 = "#000000";
    color.default2 = "#606266";
    color.default3 = "#c0c4cc";
    color.default4 = "#ebeef5";
    color.default5 = "#ffffff";
    
    
    color.primary1 = "#3a8ee6";
    color.primary2 = "#66b1ff";
    color.primary3 = "#8cc5ff";
    color.primary4 = "#b3d8ff";
    color.primary5 = "#d9ecff";
    
    
    color.second1 = "#3a8ee6";
    color.second2 = "#66b1ff";
    color.second3 = "#8cc5ff";
    color.second4 = "#b3d8ff";
    color.second5 = "#d9ecff";
    
    
    color.success1 = "#5daf34";
    color.success2 = "#85ce61";
    color.success3 = "#a4da89";
    color.success4 = "#c2e7b0";
    color.success5 = "#f0f9eb";
    
    
    color.warning1 = "#cf9236";
    color.warning2 = "#ebb563";
    color.warning3 = "#f0c78a";
    color.warning4 = "#f5dab1";
    color.warning5 = "#fdf6ec";
    
    
    color.danger1 = "#dd6161";
    color.danger2 = "#f78989";
    color.danger3 = "#f9a7a7";
    color.danger4 = "#fbc4c4";
    color.danger5 = "#fef0f0";
    
    
    color.disabled1 = "#82848a";
    color.disabled2 = "#a6a9ad";
    color.disabled3 = "#bcbec2";
    color.disabled4 = "#d3d4d6";
    color.disabled5 = "#f4f4f5";
    
    
    color.link1 = "#66b1fe";
    color.link2 = "#409efe";
    
    
    color.shadow1 = "0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)";
    color.shadow2 = "0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .12)";
    color.shadow3 = "0 2px 12px 0 rgba(0, 0, 0, 0.1)";



    (yaxi.colors || (yaxi.colors = Object.create(null))).default = color;
    
    

})(yaxi.color = Object.create(null));




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

        if (this.ondestroy)
        {
            this.ondestroy();
        }
        
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



    document.addEventListener('ontouchend' in document ? 'tap' : 'click', function (event) {

        var control = findControl(event);

        if (control && !control.disabled)
        {
            control.__on_tap(event);
        }

    }, true) ;


    // document.addEventListener('input', function (event) {

    //     var control = findControl(event);

    //     if (control && !control.disabled)
    //     {
    //         control.__on_input(event);
    //     }

    // });


    document.addEventListener('change', function (event) {

        var control = findControl(event);

        if (control && !control.disabled)
        {
            control.__on_change(event);
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




yaxi.Panel = yaxi.Control.extend(function (Class, base) {

    
    

    yaxi.template(this, '<div class="yx-control yx-panel"></div>');



    this.$subtype = yaxi.Control;



    Class.ctor = function (data) {

        var children;
        
        base.constructor.call(this, data);

        children = this.__children = new yaxi.ObserveArray(this, data && data.children);
        children.__changed = 1;
        children.__update_patch = childrenPatch;
    }




    this.$properties({

        layout: ''
    });



    Object.defineProperty(this, 'children', {

        get: function () {

            return this.__children;
        }
    });




    // 指定默认子类型
    this.__c_subtype = '$subtype';

    this.__c_children = this.__set_subtype = false;



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



    this.findByKey = function (key, deep) {

        var children = this.__children;

        for (var i = 0, l = children.length; i < l; i++)
        {
            var item = children[i];

            if (item.key === key)
            {
                return item;
            }

            if (deep !== false && item.__children && (item = item.findByKey(key, true)))
            {
                return item;
            }
        }
    }
    


    this.destroy = function () {

        var children = this.__children;

        for (var i = children.length; i--;)
        {
            children[i].destroy();
        }

        base.destroy.call(this);
    }





    this.render = function () {

        var dom = base.render.call(this),
            children = this.__children;

        for (var i = 0, l = children.length; i < l; i++)
        {
            dom.appendChild(children[i].render());
        }

        children.commit();

        return dom;
    }



    function childrenPatch(changes) {

        var list;

        if (list = changes[0])
        {
            removeChildNodes(list);
        }

        if (list = changes[1])
        {
            var dom = this.owner.$dom;

            for (var i = list.length; i--;)
            {
                dom.appendChild(list[i].$dom || list[i].render());
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


    yaxi.template(this, '<button type="button" class="yx-control yx-button"></button>');


    this.$properties({

        type: '',
        text: '',
    });
    


    this.__set_type = function (dom, value) {

        dom.setAttribute('theme', value)
    }


    this.__set_text = function (dom, value) {

        dom.textContent = value;
    }



}).register('Button');




yaxi.CheckBox = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<span class="yx-control yx-checkbox"><svg aria-hidden="true"><use xlink:href="#icon-checkbox-uncheck"></use></svg><span></span></span>');



    this.$properties({

        text: '',
        checked: false
    });
    


    this.__set_text = function (dom, value) {

        dom.lastChild.textContent = value;
    }


    this.__set_checked = function (dom, value) {

        dom.firstChild.firstChild.setAttribute('xlink:href', '#icon-checkbox-' + (value ? 'checked' : 'uncheck'));
    }


    this.__on_tap = function () {

        this.checked = !this.checked;
        this.trigger('change');
    }



}).register('CheckBox');




yaxi.FloatLayer = yaxi.Panel.extend(function (Class, base) {
	
	
	
	var stack = [];
	
	
	
	document.addEventListener('ontouchstart' ? 'touchstart' : 'mousedown', function (event) {
		
		var layer = stack[stack.length - 1];
		
		if (layer)
		{
			var root = layer.$dom,
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
			var dom = this.$dom;
			
			if (!dom)
			{
				dom = this.$dom = this.render();
				dom.classList.add('yx-floatlayer');
			}

			style = dom.style;
			style.left = x > 0 ? x + 'px' : x;
			style.top = y > 0 ? y + 'px' : y;
			
			document.body.appendChild(dom);
			
			stack.push(this);
		}
	}
	
	
	
	this.close = function () {
		
		var layer = stack.pop(),
			parent,
			dom;
		
		if (layer && (dom = this.$dom) && (parent = dom.parentNode))
		{
			parent.removeChild(dom);
		}
	}

	
	
});




yaxi.Icon = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-icon"></span>');
    
    

    this.$properties({

        // 图标类名
        icon: '',

        // svg图标id
        svg: ''
    });



    this.__set_icon = function (dom, value) {

        var classList = dom.classList,
            icon = this.__icon_;

        if (icon)
        {
            dom.classList.remove(icon);
        }

        if (this.__icon_ = value)
        {
            dom.classList.add(value);
        }
    }


    this.__set_svg = function (dom, value) {

        dom.innerHTML = value ? '<svg aria-hidden="true"><use xlink:href="#' + value.replace(/[<>"']/g, '') + '"></use></svg>' : '';
    }




}).register('Icon');





yaxi.IconButton = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<span class="yx-control yx-iconbutton"><span class="yx-icon"></span><span></span></span>');



    this.$properties({

        // 文本内容
        text: '',

        // 图标类名
        icon: '',

        // svg图标id
        svg: ''
    });
    



    this.__set_text = function (dom, value) {

        dom.lastChild.textContent = value;
    }


    this.__set_icon = function (dom, value) {

        var classList = dom.firstChild.classList,
            icon = this.__icon_;

        if (icon)
        {
            classList.remove(icon);
        }

        if (this.__icon_ = value)
        {
            classList.add(value);
        }
    }


    this.__set_svg = function (dom, value) {

        dom.firstChild.innerHTML = value ? '<svg aria-hidden="true"><use xlink:href="#' + value.replace(/[<>"']/g, '') + '"></use></svg>' : '';
    }



}).register('IconButton');




yaxi.Image = yaxi.Control.extend(function () {



    yaxi.template(this, '<img class="yx-control yx-image"></img>');
    
    

    this.$properties({

        // 图标路径
        src: ''
    });



}).register('Image');




yaxi.Memo = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-memo"><textarea></textarea></span>');



    this.$properties({

        text: '',
        placeholder: ''
    });



    this.__set_text = function (dom, value) {

        dom.firstChild.value = value;
    }


    this.__set_placeholder = function (dom, value) {

        dom.firstChild.placeholder = value;
    }


    

    this.__bind_event = function (dom, name, listener) {

        if (name === 'focus' || name === 'blur')
        {
            dom = dom.firstChild;
        }

        dom.addEventListener(name, listener);
    }


    this.__unbind_event = function (dom, name, listener) {

        if (name === 'focus' || name === 'blur')
        {
            dom = dom.firstChild;
        }

        dom.removeEventListener(name, listener);
    }



}).register('Memo');




yaxi.Page = yaxi.Panel.extend(function (Class, base) {



	yaxi.template(this, '<div class="yx-control yx-page"></div>');



	this.open = function (options) {
				
		var opener = Class.current || null;
		
		if (this.onopening(options) !== false)
		{
			document.body.appendChild(this.$dom || this.render());
			
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




yaxi.Password = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-textbox"><input type="password" /><span></span></span>');



    this.$properties({

        type: '',
        text: '',
        placeholder: ''
    });



    this.__set_type = function (dom, value) {

        dom.lastChild.className = value ? 'yx-password-' + value : '';
    }


    this.__set_text = function (dom, value) {

        dom.firstChild.textContent = value;
    }


    this.__set_placeholder = function (dom, value) {

        dom.firstChild.placeholder = value;
    }


    
    
    this.__on_input = this.__on_change = function (event) {

        this.text = event.target.value;
    }


    this.__bind_event = function (dom, name, listener) {

        if (name === 'focus' || name === 'blur')
        {
            dom = dom.firstChild;
        }

        dom.addEventListener(name, listener);
    }


    this.__unbind_event = function (dom, name, listener) {
        
        if (name === 'focus' || name === 'blur')
        {
            dom = dom.firstChild;
        }

        dom.removeEventListener(name, listener);
    }



}).register('Password');




yaxi.RadioButton = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<span class="yx-control yx-radiobutton"><span class="yx-icon"></span><span></span></span>');



    this.$properties({

        text: '',
        checked: false
    });
    


    this.__set_text = function (dom, value) {

        dom.lastChild.textContent = value;
    }


    this.__set_checked = function (dom, value) {

        dom.classList[value ? 'add' : 'remove']('yx-radiobutton-checked');
    }


    this.__on_tap = function () {

        this.checked = !this.checked;
        this.trigger('change');
    }



}).register('RadioButton');




yaxi.SwitchButton = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<span class="yx-control yx-switchbutton"><span><span></span>');



    this.$properties({

        checked: false
    });
    



    this.__set_checked = function (dom, value) {

        var classList = dom.classList;

        if (value)
        {
            classList.add('yx-switchbutton-checked');
        }
        else
        {
            classList.remove('yx-switchbutton-checked');
        }
    }



}).register('SwitchButton');




yaxi.Text = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-text"></span>');



    this.$properties({

        text: ''
    });



    this.__set_text = function (dom, value) {

        dom.textContent = value;
    }



}).register('Text');




yaxi.TextBox = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-textbox"><input type="text" /></span>');



    this.$properties({

        text: '',
        placeholder: ''
    });



    this.__set_text = function (dom, value) {

        dom.firstChild.textContent = value;
    }


    this.__set_placeholder = function (dom, value) {

        dom.firstChild.placeholder = value;
    }


    

    this.__bind_event = function (dom, name, listener) {

        if (name === 'focus' || name === 'blur')
        {
            dom = dom.firstChild;
        }

        dom.addEventListener(name, listener);
    }


    this.__unbind_event = function (dom, name, listener) {

        if (name === 'focus' || name === 'blur')
        {
            dom = dom.firstChild;
        }

        dom.removeEventListener(name, listener);
    }



}).register('TextBox');
