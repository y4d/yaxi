(function(window){var svgSprite='<svg><symbol id="icon-back" viewBox="0 0 1024 1024"><path d="M395.21518 513.604544l323.135538-312.373427c19.052938-18.416442 19.052938-48.273447 0-66.660212-19.053961-18.416442-49.910737-18.416442-68.964698 0L291.75176 480.290811c-19.052938 18.416442-19.052938 48.273447 0 66.660212l357.633237 345.688183c9.525957 9.207709 22.01234 13.796214 34.497699 13.796214 12.485359 0 24.971741-4.588505 34.466999-13.82896 19.052938-18.416442 19.052938-48.242747 0-66.660212L395.21518 513.604544z"  ></path></symbol><symbol id="icon-radio-checked" viewBox="0 0 1024 1024"><path d="M512 259.56503703c-138.83922963 0-252.43496297 113.59573333-252.43496297 252.43496297s113.59573333 252.43496297 252.43496297 252.43496297 252.43496297-113.59573333 252.43496297-252.43496297S650.83922963 259.56503703 512 259.56503703zM512 7.13007408C234.323968 7.13007408 7.13007408 234.323968 7.13007408 512s227.19389392 504.86992592 504.86992592 504.86992592 504.86992592-227.19389392 504.86992592-504.86992592S789.676032 7.13007408 512 7.13007408zM512 915.89594075c-222.13791289 0-403.89594075-181.76045511-403.89594075-403.89594075S289.86208711 108.10405925 512 108.10405925 915.89594075 289.86208711 915.89594075 512 734.13791289 915.89594075 512 915.89594075z"  ></path></symbol><symbol id="icon-checkbox-uncheck" viewBox="0 0 1024 1024"><path d="M892.24735231 1012.51492048l-760.49638045 0c-66.35446257 0-120.26589234-53.91310559-120.26589234-120.26589234l0-760.56676528c0-66.35446257 53.91310559-120.26589234 120.26589234-120.26589236l760.49638045 0c66.35446257 0 120.26589234 53.91310559 120.26589235 120.26589236l0 760.56676528c0 66.35446257-53.91310559 120.26589234-120.26589235 120.26589234zM131.75264769 82.98768981c-26.88533005 0-48.76495786 21.95168848-48.76495788 48.76495788l0 760.56676528c0 26.81326939 21.87962782 48.76495786 48.76495788 48.76495787l760.49638045 0c26.81326939 0 48.76495786-21.95168848 48.76495787-48.76495787l0-760.56676528c0-26.81326939-21.95168848-48.76495786-48.76495787-48.76495788l-760.49638045 0z"  ></path></symbol><symbol id="icon-checkbox-checked" viewBox="0 0 1024 1024"><path d="M892.24735231 1012.51492048l-760.49638045 0c-66.35446257 0-120.26589234-53.91310559-120.26589234-120.26589234l0-760.56676528c0-66.35446257 53.91310559-120.26589234 120.26589234-120.26589236l760.49638045 0c66.35446257 0 120.26589234 53.91310559 120.26589235 120.26589236l0 760.56676528c0 66.35446257-53.91310559 120.26589234-120.26589235 120.26589234zM131.75264769 82.98768981c-26.88533005 0-48.76495786 21.95168848-48.76495788 48.76495788l0 760.56676528c0 26.81326939 21.87962782 48.76495786 48.76495788 48.76495787l760.49638045 0c26.81326939 0 48.76495786-21.95168848 48.76495787-48.76495787l0-760.56676528c0-26.81326939-21.95168848-48.76495786-48.76495787-48.76495788l-760.49638045 0z"  ></path><path d="M449.57870885 836.76231882l-274.13886619-274.21092687 101.10445971-101.10445972 154.87344396 154.80138332 308.38779037-431.80089021 116.40478156 83.08594269z"  ></path></symbol><symbol id="icon-radio-uncheck" viewBox="0 0 1024 1024"><path d="M512 7.13007408C234.323968 7.13007408 7.13007408 234.323968 7.13007408 512s227.19389392 504.86992592 504.86992592 504.86992592 504.86992592-227.19389392 504.86992592-504.86992592S789.676032 7.13007408 512 7.13007408zM512 915.89351348c-222.13791287 0-403.89351348-181.75802787-403.89351348-403.89351348S289.86208713 108.10405925 512 108.10405925 915.89594075 289.86208713 915.89594075 512 734.13791287 915.89351348 512 915.89351348z"  ></path></symbol><symbol id="icon-eye-open" viewBox="0 0 1024 1024"><path d="M515.2 224C208 224 22.4 537.6 22.4 537.6s214.4 304 492.8 304 492.8-304 492.8-304S822.4 224 515.2 224zM832 652.8c-102.4 86.4-211.2 140.8-320 140.8s-217.6-51.2-320-140.8c-35.2-32-70.4-64-99.2-99.2-6.4-6.4-9.6-12.8-16-19.2 3.2-6.4 9.6-12.8 12.8-19.2 25.6-35.2 57.6-70.4 92.8-102.4 99.2-89.6 208-144 329.6-144s230.4 54.4 329.6 144c35.2 32 64 67.2 92.8 102.4 3.2 6.4 9.6 12.8 12.8 19.2-3.2 6.4-9.6 12.8-16 19.2-28.8 32-60.8 67.2-99.2 99.2z" fill="" ></path><path d="M512 345.6c-96 0-169.6 76.8-169.6 169.6 0 96 76.8 169.6 169.6 169.6 96 0 169.6-76.8 169.6-169.6S604.8 345.6 512 345.6z m0 294.4c-67.2 0-121.6-54.4-121.6-121.6 0-67.2 54.4-121.6 121.6-121.6 67.2 0 121.6 54.4 121.6 121.6 0 64-54.4 121.6-121.6 121.6z" fill="" ></path></symbol><symbol id="icon-eye-close" viewBox="0 0 1024 1024"><path d="M515.49297778 629.18428445c-203.28106667 0-392.82460445-109.44284445-494.81500445-285.59587556-14.90261333-25.73084445-6.05297778-58.56256 19.55953778-73.46631111 25.73084445-14.90147555 58.67975111-6.05297778 73.46631111 19.56067555C196.48284445 432.65592889 350.39914667 521.48906667 515.37692445 521.48906667S834.26986667 432.65479111 917.04888889 289.56672c14.90261333-25.73084445 47.73546667-34.57934222 73.46631111-19.67672889s34.46215111 47.73546667 19.67559111 73.46631111C908.31758222 519.74144 718.77404445 629.18314667 515.49297778 629.18314667z m-278.72597333 53.5552c-9.43104 0-19.09418667-2.44394667-27.70944-7.68341334-25.4976-15.36796445-33.64750222-48.43406222-18.27953778-73.81447111l59.37720888-98.26417778c15.36910222-25.4976 48.4352-33.53144889 73.8156089-18.27953777 25.4976 15.36796445 33.64750222 48.43406222 18.2784 73.8144711l-59.3772089 98.26417778c-10.12963555 16.64910222-27.82663111 25.96408889-46.1050311 25.96408889z m554.5415111 0c-18.16234667 0-35.97653333-9.19665778-46.1050311-25.96295112l-59.37834667-98.26417778c-15.36796445-25.4976-7.21806222-58.44650667 18.16234667-73.8144711 25.4976-15.36796445 58.44764445-7.21806222 73.81560888 18.16234666l59.37720889 98.26417778c15.36796445 25.4976 7.21806222 58.44764445-18.16234667 73.81560889-8.61525333 5.23832889-18.27953778 7.80060445-27.70944 7.80060444z m-275.81553777 69.97333333c-29.68917333 0-53.78958222-24.10040889-53.78958223-53.78958223v-123.52853333c0-29.68917333 24.10040889-53.78958222 53.78958223-53.78958222 29.68917333 0 53.78958222 24.10040889 53.78958222 53.78958222v123.52853333c0 29.68917333-24.10040889 53.78958222-53.78958222 53.78958223z" fill="#707070" ></path></symbol><symbol id="icon-checkbox-three" viewBox="0 0 1024 1024"><path d="M1012.51436242 941.01231019V82.98768981a71.50205225 71.50205225 0 0 0-71.50205223-71.50205223H82.98768981a71.50205225 71.50205225 0 0 0-71.50205223 71.50205223v858.02462038a71.50205225 71.50205225 0 0 0 71.50205223 71.50205223h858.02462038a71.50205225 71.50205225 0 0 0 71.50205223-71.50205223z m-143.00410448-71.50205225H154.48974206V154.48974206h715.02051588v715.02051588z"  ></path><path d="M297.49384493 297.49384493h429.01231014v429.01231014H297.49384493z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)



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





;(function (Math) {
    

    var pows = Object.create(null);
    
    var round = Math.round;



    Math.round2 = function (value, digits) {

        if ((digits |= 0) > 0)
        {
            var pow = pows[digits] || (pows[digits] = Math.pow(10, digits));

            // +0.00000001解决如2.135*100不等于213.5的问题
            return round(value * pow + 0.00000001) / pow;
        }

        // +0.00000001解决如2.135*100不等于213.5的问题
        return round(value + 0.00000001);
    }


    // 注: 不同浏览器toFixed有差异, chrome使用的是银行家舍入规则
    // 银行家舍入: 所谓银行家舍入法, 其实质是一种四舍六入五取偶(又称四舍六入五留双)法
    // 简单来说就是: 四舍六入五考虑, 五后非零就进一, 五后为零看奇偶, 五前为奇应舍去, 五前为偶要进一
    // 此处统一处理为四舍五入
    Object.defineProperty(Number.prototype, 'toFixed2', {

        enumerable: false,

        value: (1.115).toFixed(2) !== '1.11' ? (0).toFixed : function (digits) {

            if ((digits |= 0) > 0)
            {
                var pow = pows[digits] || (pows[digits] = Math.pow(10, digits));
    
                // +0.00000001解决如2.135*100不等于213.5的问题
                return (round(this * pow + 0.00000001) / pow).toFixed(digits);
            }
    
            // +0.00000001解决如2.135*100不等于213.5的问题
            return '' + round(this + 0.00000001);
        }
    });



})(Math);




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

    var prototype = this;

    

    this.on = yaxi.on = function (type, listener) {
        
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
            
            if (listener = this.__event_change)
            {
                this.__event_change(type, items, true);
            }
        }
    }


    this.once = yaxi.once = function (type, listener) {

        if (typeof listener === 'function')
        {
            function callback(event) {

                listener.call(this, event);
                this.off(type, callback);
            }

            this.on(type, callback);
        }
    }


    this.off = yaxi.off = function (type, listener) {
        
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

            if (listener = this.__event_change)
            {
                listener.call(this, type, items, false);
            }
        }
    }


    this.trigger = yaxi.trigger = function (type, payload) {
        
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



    Class.mixin = function (target) {

        target.on = prototype.on;
        target.once = prototype.once;
        target.off = prototype.off;
        target.trigger = prototype.trigger;
    }



});




'ontouchstart' in document ? (function () {


	
	// 触摸开始事件参数
    var start = {};
    


	function longTapDelay() {
		
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
		start.delay = setTimeout(longTapDelay, 600);
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
            
                e.target.dispatchEvent(event);
			}
			
		}
	});


	document.addEventListener('touchcancel', clearLongTap);


})() : (function () {


    document.addEventListener('click', function (e) {

        var event = document.createEvent('HTMLEvents');

        event.initEvent('tap', true, true);
                
        event.clientX = e.clientX;
        event.clientY = e.clientY;
        e.target.dispatchEvent(event);

    });


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
                    this[name] = data[name];
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


    Class.all = function () {

        var instance = new Class(),
            cache = [],
            index = 0,
            length = 0,
            item;

        while (item = arguments[index])
        {
            length++;

            (function (item, index) {

                item
                    .then(function (value) {

                        cache[index] = value;

                        if (!--length)
                        {
                            instance.resolve(cache);
                        }
                    })
                    .catch(function (error) {
                        
                        instance.reject(error);
                    });

            })(item, index++);
        }

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
                    fn.call(this, cache.shift(), next);
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

        var next = this.__next,
            any;

        if (next)
        {
            if (any = this.__fn)
            {
                try
                {
                    any.call(this, value, next);
                }
                catch (e)
                {
                    this.reject(e);
                }
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

        return this.registry(function (value, next) {

            if (fn)
            {
                var result = fn(value);

                if (result !== void 0)
                {
                    value = result;
                }
            }

            next.resolve(value);
        });
    }


    this.combine = function (stream) {

        return this.registry(function (value, next) {

            stream
                .then(function (thenValue) {

                    if (value instanceof Array)
                    {
                        thenValue = [value, thenValue];
                    }
                    else
                    {
                        value.push(thenValue);
                        thenValue = value;
                    }

                    next.resolve(thenValue);
                })
                .catch(function (error) {

                    next.reject(error);
                });
        });
    }


    this.map = function (fn) {

        return this.registry(function (value, next) {

            next.resolve(fn(value));
        });
    }


    this.json = function (fn) {

        return this.registry(function (value, next) {

            if (typeof value === 'string')
            {
                value = JSON.parse(value);
            }

            if (fn)
            {
                value = fn(value);
            }

            next.resolve(value);
        });
    }


    this.catch = function (fault) {

        this.__error = fault;
        return (this.__next = new Class());
    }


    this.wait = function (time) {

        var cache = [];
        var timeout;

        return this.registry(function (value, next) {

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

        return this.registry(function (value, next) {

            setTimeout(function () {

                next.resolve(value);

            }, time | 0);
        });
    }


    this.debounce = function (time) {

        var timeout;

        return this.registry(function (value, next) {

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

        return this.registry(function (value, next) {

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
                    if (this.status === http.redirectStatus)
                    {
                        http.redirect();
                    }
                    else
                    {
                        stream.resolve(this.responseText || this.responseXML);
                    }
                }
                else
                {
                    try
                    {
                        stream.reject(this.statusText);
                    }
                    catch (e)
                    {
                        flyingon.toast(this.statusText);
                    }
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



    // 重定向状态码
    http.redirectStatus = 299;


    // 重定向
    http.redirect = function () {
        
        location.href = 'index.html';
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


    color.back = '#ffffff';


    color.default1 = "#000000";
    color.default2 = "#606266";
    color.default3 = "#c0c4cc";
    color.default4 = "#e0e0e0";
    color.default5 = "#f8f8f8";
    
    
    color.primary1 = "#3a8ee6";
    color.primary2 = "#66b1ff";
    color.primary3 = "#8cc5ff";
    color.primary4 = "#b3d8ff";
    color.primary5 = "#d9ecff";
    
    
    color.second1 = "#66b1ff";
    color.second2 = "#8cc5ff";
    color.second3 = "#b3d8ff";
    color.second4 = "#d9ecff";
    color.second5 = "#e9fcff";
    
    
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

    // 正在输入的控件
    var input;


    
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


    function findControl(dom) {

        var control;

        while (dom)
        {
            if (control = dom.$control)
            {
                return control;
            }

            dom = dom.parentNode;
        }
    }


    function domEventListener(event) {

        var control = findControl(event.target) || this.$control;

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

        var control = findControl(event.target),
            changed;
        
        // 提交输入
        if ((changed = input) && changed !== control && changed.$dom)
        {
            changed.__on_change();
            changed.trigger('change');
            changed = null;
        }

        if (control && !control.disabled)
        {
            control.__on_tap(event);
        }

    }, true);


    document.addEventListener('input', function (event) {

        var control = findControl(event.target);

        if (control && !control.disabled)
        {
            input = control;

            control.trigger('input', {
                
                text: event.target.value
            });
        }
    });


    document.addEventListener('change', function (event) {

        var changed;

        if (changed = input)
        {
            changed.__on_change();
            changed.trigger('change');
            changed = null;
        }

        // var control = findControl(event.target);

        // if (control && !control.disabled)
        // {
        //     control.__on_change();
        //     control.trigger('change');
        // }
    });




    this.__on_tap = function (event) {
    }


    this.__on_change = function () {

        this.text = this.$dom.firstChild.value;
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

        // 布局类型
        layout: ''
    });



    // 子控件集合
    Object.defineProperty(this, 'children', {

        get: function () {

            return this.__children;
        },
        set: function (value) {

            var children = this.__children;

            children.clear();

            if (value && value.length > 0)
            {
                children.push.apply(children, value);
            }
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

        text: '',
    });
    


    this.__set_text = function (dom, value) {

        dom.textContent = value;
    }



}).register('Button');




yaxi.HtmlControl = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<div class="yx-control yx-htmlcontrol"></div>');



    this.$properties({

        html: ''
    });




    this.__set_html = function (dom, value) {

        dom.innerHTML = value;
    }



});




yaxi.Icon = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-icon"></span>');
    
    

    this.$properties({

        // 图标类名
        icon: '',

        // svg图标id
        svg: '',

        // svg颜色
        fill: ''
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


    
    this.__set_fill = function (dom, value) {

        if (dom = dom.firstChild.firstChild)
        {
            dom.style.fill = value;
        }
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
        svg: '',

        // svg颜色
        fill: '',

        // 图标大小
        size: ''
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


    this.__set_fill = function (dom, value) {

        if (dom = dom.firstChild.firstChild)
        {
            dom.style.fill = value;
        }
    }


    this.__set_size = function (dom, value) {

        dom.firstChild.style.fontSize = value;
    }



}).register('IconButton');




yaxi.Image = yaxi.Control.extend(function () {



    yaxi.template(this, '<img class="yx-control yx-image"></img>');
    
    

    this.$properties({

        // 图标路径
        src: ''
    });



}).register('Image');




yaxi.Tab = yaxi.Panel.extend(function (Class, base) {


    yaxi.template(this, '<div class="yx-control yx-panel yx-tab"></div>');


    Class.ctor = function (data) {

        base.constructor.call(this, data);
        this.on('tap', handleTap.bind(this));
    }



    function handleTap(event) {

        var target = event.target;

        while (target && target !== this)
        {
            if (target.$parent === this)
            {
                if (target.theme !== 'primary')
                {
                    var children = this.children,
                        last;

                    for (var i = children.length; i--;)
                    {
                        if ((last = children[i]) && last.theme === 'primary')
                        {
                            last.theme = '';
                            break;
                        }
                    }

                    target.theme = 'primary';

                    this.trigger('selected-change', {

                        current: target,
                        last: last
                    });
                }

                break;
            }

            target = target.$parent;
        }
    }



}).register('Tab');




yaxi.Text = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-text"></span>');



    this.$properties({

        text: ''
    });



    this.__set_text = function (dom, value) {

        dom.textContent = value;
    }



}).register('Text');




yaxi.CheckBox = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<span class="yx-control yx-checkbox"><svg aria-hidden="true"><use xlink:href="#icon-checkbox-uncheck"></use></svg><span></span></span>');



    this.$properties({

        text: '',
        
        fill: '',

        checked: false
    });
    


    this.__set_text = function (dom, value) {

        dom.lastChild.textContent = value;
    }


    this.__set_checked = function (dom, value) {

        dom.firstChild.firstChild.setAttribute('xlink:href', '#icon-checkbox-' + (value ? 'checked' : 'uncheck'));
    }


    this.__set_fill = function (dom, value) {

        dom.firstChild.style.fill = value;
    }



    this.__on_tap = function () {

        this.checked = !this.checked;
        this.trigger('change');
    }



}).register('CheckBox');




yaxi.Memo = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-memo"><textarea></textarea></span>');



    this.$properties({

        text: '',
        placeholder: ''
    });



    // 获取输入的文字内容
    Object.defineProperty(this, 'input', {

        get: function () {

            var dom = this.$dom;
            return dom ? dom.firstChild.value : 0;
        }
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




yaxi.Password = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-textbox yx-password"><input type="password" /><span><svg aria-hidden="true"><use xlink:href="#icon-eye-close"></use></svg></span></span>');



    this.$properties({

        type: '',
        text: '',
        placeholder: ''
    });


    // 获取输入的文字内容
    Object.defineProperty(this, 'input', {

        get: function () {

            var dom = this.$dom;
            return dom ? dom.firstChild.value : 0;
        }
    });



    this.__set_type = function (dom, value) {

        dom.lastChild.className = value ? 'yx-password-' + value : '';
    }


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



    this.__on_tap = function (event) {

        var target = event.target,
            dom = this.$dom,
            icon;

        while (target && target !== dom)
        {
            if (target.tagName === 'SPAN')
            {
                dom = dom.firstChild;
                
                if (dom.type === 'text')
                {
                    dom.type = 'password';
                    icon = 'eye-close';
                }
                else
                {
                    dom.type = 'text';
                    icon = 'eye-open';
                }

                target.firstChild.firstChild.setAttribute('xlink:href', '#icon-' + icon);
                return;
            }

            target = target.parentNode;
        }
    }




}).register('Password');




yaxi.RadioButton = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<span class="yx-control yx-radiobutton"><svg aria-hidden="true"><use xlink:href="#icon-radio-uncheck"></use></svg><span></span></span>');



    this.$properties({

        text: '',

        fill: '',
        
        checked: false
    });
    


    this.__set_text = function (dom, value) {

        dom.lastChild.textContent = value;
    }


    this.__set_checked = function (dom, value) {

        dom.firstChild.firstChild.setAttribute('xlink:href', '#icon-radio-' + (value ? 'checked' : 'uncheck'));
    }


    this.__set_fill = function (dom, value) {

        dom.firstChild.style.fill = value;
    }


    this.__on_tap = function () {

        this.checked = !this.checked;
        this.trigger('change');
    }



}).register('RadioButton');




yaxi.SwitchButton = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<span class="yx-control yx-switchbutton"><span class="yx-switchbutton-bar"></span><span class="yx-switchbutton-button"></span></span>');



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



    this.__on_tap = function () {

        this.checked = !this.checked;
        this.trigger('change');
    }



}).register('SwitchButton');




yaxi.TextBox = yaxi.Control.extend(function () {



    yaxi.template(this, '<span class="yx-control yx-textbox"><input type="text" /></span>');



    this.$properties({

        text: '',
        placeholder: ''
    });


    // 获取输入的文字内容
    Object.defineProperty(this, 'input', {

        get: function () {

            var dom = this.$dom;
            return dom ? dom.firstChild.value : 0;
        }
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



}).register('TextBox');




yaxi.Page = yaxi.Control.extend(function (Class, base) {



	yaxi.template(this, '<div class="yx-control yx-page"></div>');




	Class.all = function () {

		var list = [],
			page = Class.current;

		while (page)
		{
			list.push(page);
			page = page.opener;
		}

		return list.reverse();
	}


	Class.closeTo = function (level, closeType) {

		var list = Class.all();

		level |= 0;

		for (var i = list.length - 1; i > level; i--)
		{
			list[i].close(closeType || 'OK');
		}

		return list[level];
	}


	Class.closeAll = function (closeType) {

		var page;

		while (page = Class.current)
		{
			page.close(closeType || 'OK');
		}
	}



	Class.ctor = function (data) {

		var any;

		base.constructor.call(this, data);

		if (data)
		{
			if (any = data.header)
			{
				if (typeof any === 'string')
				{
					any = this.__template_header(any);
				}
		
				any = this.header = new (any.Class || yaxi.Panel)(any);
				any.$parent = this;
				any.$className = 'yx-header';
			}
		
			if (any = data.content)
			{
				this.content = new (any.Class || yaxi.Panel)(any);
			}

			if (any = data.footer)
			{
				any = this.footer = new (any.Class || yaxi.Panel)(any);
				any.$parent = this;
				any.$className = 'yx-footer';
			}
		}
		
		any = this.content || (this.content = new yaxi.Panel());
		any.$parent = this;
		any.$className = 'yx-content';
	}



	
	this.__c_header = this.__c_content = this.__c_footer = false;


	this.__template_header = function (text) {

		return {

			Class: yaxi.Header,
			children: [
				{
					Class: yaxi.BackButton
				},
				{
					Class: yaxi.Title,
					text: text
				}
			]
		};
	}




	this.$properties({

		// 是否自动销毁
		autoDestroy: true
	});
		


	this.open = function (options) {
				
		var opener = Class.current || null;
		
		if (this.onopening(options) !== false)
		{
			document.body.appendChild(this.$dom || this.render());
			
		    this.opener = opener;
			this.onopened(options);
			this.onshow();
			
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
			
			this.onhide();
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

			if (this.autoDestroy)
			{
				this.destroy();
			}
			
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



	this.destroy = function () {

		var any;

		if (any = this.footer)
		{
			any.destroy();
		}

		this.content.destroy();

		if (any = this.header)
		{
			any.destroy();
		}

		base.destroy.call(this);
	}
	


	
    this.render = function () {

        var dom = base.render.call(this),
            any;

        if (any = this.header)
        {
			any = any.render();
			any.classList.add('yx-header');

            dom.appendChild(any);
        }

        if (any = this.content)
        {
			any = any.render();
			any.classList.add('yx-content');

            dom.appendChild(any);
        }

        if (any = this.footer)
        {
			any = any.render();
			any.classList.add('yx-footer');

            dom.appendChild(any);
        }

        return dom;
    }
	
	
    
}).register('Page');




yaxi.BackButton = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<span class="yx-control yx-backbutton yx-icon"><svg aria-hidden="true"><use xlink:href="#icon-back"></use></svg></span>');



    Class.ctor = function (data) {

        base.constructor.call(this, data);
        this.on('tap', handleTap.bind(this));
    }



    function handleTap(event) {

        this.root.close('BACK');
    }


});




yaxi.Dialog = yaxi.Page.extend(function (Class, base) {
	
	
	
	var stack = [];
	
	var eventName = 'ontouchstart' ? 'touchstart' : 'mousedown';

    


    yaxi.template(this, '<div class="yx-control yx-dialog"></div>');
	


	this.$properties({

		// 是否自动关闭
		autoClose: false
	});



	this.__template_header = function (text) {

		return {

			Class: yaxi.Title,
			text: text
		};
	}

	

	function checkTap(event) {
		
		var dialog = stack[stack.length - 1];
		
		if (dialog)
		{
			var dom = dialog.$dom,
				node = event.target;
				
			while (node)
			{
				if (node === dom)
				{
					return;
				}
				
				node = node.parentNode;
			}

			if (dialog.autoClose)
			{
				dialog.close();
			}

			event.stopImmediatePropagation();
			return false;
		}
	}



	function computePosition() {

		var dialog = stack[stack.length - 1],
			dom;

		if (dialog && (dom = dialog.$dom))
		{
			var style = dom.style;

			style.top = (window.innerHeight - dom.offsetHeight >> 1) + 'px';
			style.left = (window.innerWidth - dom.offsetWidth >> 1) + 'px';
		}
	}


	
	this.open = function (options) {
		
		if (stack.indexOf(this) >= 0 || this.onopening(options) === false)
		{
			return false;
		}

		document.body.appendChild(this.$dom || this.render());

		this.onopened(options);
		this.onshow();

		this.trigger('opened');

		stack.push(this);
		computePosition.call(this);

		if (!stack[1])
		{
			document.addEventListener(eventName, checkTap, true);
			window.addEventListener('resize', computePosition, true);
		}

		return true;
	}
	
	
	
	this.close = function (closeType) {
		
		if (stack[stack.length - 1] !== this || this.onclosing(closeType) === false)
		{
			return false;
		}

		var dom = this.$dom;

		if (dom && dom.parentNode)
		{
			dom.parentNode.removeChild(dom);
		}

		stack.pop();

		if (stack[0])
		{
			computePosition();
		}
		else
		{
			document.removeEventListener(eventName, checkTap, true);
			window.removeEventListener('resize', computePosition, true);
		}

		this.onhide();
		this.onclosed(closeType);

		this.trigger('closed', {

			closeType: closeType
		});

		if (this.autoDestroy)
		{
			this.destroy();
		}
	}
	


});




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




yaxi.showMessage = function (options) {

    var dialog, content, callback;

    if (typeof options === 'string')
    {
        options = {
            header: options
        }
    }
    else
    {
        options = options || {};
    }

    if ((content = options.content) && typeof content === 'string')
    {
        content = [
            {
                Class: yaxi.HtmlControl,
                html: content
            }
        ];
    }

    callback = options.callback;

    options = {
        className: 'yx-messagebox',
        header: options.header || yaxi.showMessage.header,
        content: {
            layout: 'row',
            style: {
                alignItems: 'center'
            },
            children: content
        },
        footer: {
            subtype: yaxi.Button,
            children: options.buttons || [
                {
                    theme: 'primary',
                    key: 'OK',
                    text: '确定'
                },
                {
                    key: 'Cancel',
                    text: '取消'
                }
            ],
            events: {

                tap: function (event) {

                    var dialog = this.parent;

                    if (!callback || callback.call(dialog, event.target) !== false)
                    {
                        dialog.close();
                    }
                }
            }
        }
    };
    
    dialog = new yaxi.Dialog(options);
    dialog.open();

    return dialog;
}


yaxi.prompt = function (options) {

    var callback = options && options.callback;

    options = options || {};

    callback && (options.callback = function (button) {

        return callback.call(this, this.content.findByKey('input').text, button);
    });

    options.content = [
        {
            Class: options.password ? yaxi.Password : yaxi.TextBox,
            key: 'input',
            text: options.value || '',
            style: {
                width: '100%'
            }
        }
    ];

    return yaxi.showMessage(options);
}




yaxi.Title = yaxi.Control.extend(function (Class) {
    
    

    yaxi.template(this, '<div class="yx-control yx-title"></div>');
    
    

    this.$properties({

        text: ''
    });



    this.__set_text = function (dom, value) {

        dom.textContent = value;
    }
	
	
	
});




(function () {


    var dom = document.createElement('div');

    var mask = document.createElement('div');

    var delay;



    dom.className = 'yx-toast';
    mask.className = 'yx-toast-mask';


    function close() {

        var any;

        delay = 0;

        if (any = dom.parentNode)
        {
            any.removeChild(dom);
            window.removeEventListener('resize', computePosition, true);
        }

        if (any = mask.parentNode)
        {
            any.removeChild(mask);
        }
    }


    this.toast = function (options) {

        var style = dom.style;

        if (delay)
        {
            clearTimeout(delay);
        }

        if (typeof options === 'string')
        {
            options = { text: options };
        }
    
        dom.innerHTML = (options.loading ? '<span class="yx-toast-loading"></span>' : '')
            + '<span>' + options.text + '</span>';
    
        if (options.mask !== false && !mask.parentNode)
        {
            document.body.appendChild(mask);
        }

        if (!dom.parentNode)
        {
            document.body.appendChild(dom);
            window.addEventListener('resize', computePosition, true);
        }

        style.cssText = options.style || '';
        style.marginLeft = -(dom.offsetWidth >> 1) + 'px';

        delay = setTimeout(close, options.time || 2500);
    }


    this.toast.hide = function () {

        if (delay)
        {
            clearTimeout(delay);
        }

        close();
    }


    function computePosition() {

        var style = dom.style;

        style.top = (window.innerHeight - dom.offsetHeight >> 1) + 'px';
        style.left = (window.innerWidth - dom.offsetWidth >> 1) + 'px';
    }
    

}).call(yaxi);
