
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
