yaxi.Tab = yaxi.Control.extend(function (Class, base) {


    
	Class.ctor = function (items, html) {
		
		var dom = this.dom = document.createElement('div'),
			array = [],
			index = 0,
			item,
			any;
			
		this.items = items;
		
		array.push('<div class="tab-head">');
		
		while (item = items[index++])
		{
			if ((any = item.url || '') && any[0] !== '/')
			{
				alert('tab url必须使用绝对路径(以"/"开头)！');
			}
			
			array.push('<div class="tab-head-item" url="', any, '">');
			array.push('<div class="tab-head-item-content">')
			
			if (any = item.svg)
			{
				array.push('<span class="tab-item-head-icon">',
					'<svg class="icon" aria-hidden="true">',
						'<use xlink:href="#', any, '"></use>',
					'</svg>',
				'</span>');
			}
			else if (any = item.icon)
			{
				array.push('<span class="tab-item-head-icon ', any, '"></span>');
			}
			
			if (any = item.text)
			{
				array.push('<span class="tab-item-head-text">', any, '</span>');
			}
			
			array.push('</div></div>');
		}
		
		if (html)
		{
			array.push(html);
		}
		
		array.push('</div>');
		array.push('<div class="tab-body"></div>');
		
		dom.className = 'tab';
		dom.innerHTML = array.join('');
		
		dom = dom.firstChild;

		// 不传入自定义html时默认充满页签头
		if (!html)
		{
			dom.className += ' flex-row flex-items-grow';
		}
		
		dom.addEventListener('tap', handleTap.bind(this));
		
		dom = dom.firstChild;
		index = 0;
		
		while (item = items[index++])
		{
			item.head = dom;
			dom = dom.nextSibling;
		}
	}
	
	
	
	function handleTap(event) {
		
		var dom = this.domByClass(event.target, 'tab-head-item'),
			url;
		
		if (dom && (url = dom.getAttribute('url')))
		{
			var items = this.items;
			
			for (var i = items.length; i--;)
			{
				if (items[i].url === url)
				{
					this.selectedIndex = i;
					break;
				}
			}
		}
	}
	
	

	this.__selectedIndex = -1;
	
	
	// 当前选择的页签索引
	Object.defineProperty(this, 'selectedIndex', {
		
		get: function () {
			
			return this.__selectedIndex;
		},
		
		set: function (index) {
			
			var selected = this.selectedIndex;
			
			if (selected !== (index |= 0))
			{
				var items = this.items;
				
				if (selected = items[selected])
				{
					selected.head.classList.remove('active');
					selected.body.style.display = 'none';
					selected.page.onhide && selected.page.onhide();
				}
				
				this.__selectedIndex = index;
				
				if (selected = items[index])
				{
					var body = selected.body;
					
					selected.head.classList.add('active');
					
					if (body)
					{
						body.style.display = '';
						selected.page.onshow && selected.page.onshow();
					}
					else
					{
						selected.page = new (require(selected.url))(selected);
						selected.body = selected.page.dom;
						
						this.dom.lastChild.appendChild(selected.body); 
					}
				}
			}
		}
		
	});
	
	
	// 当前选中的页签对象
	Object.defineProperty(this, 'selectedItem', {
		
		get: function () {
			
			return this.items[this.selectedIndex] || null;
		}
	});



	this.findByKey = function (key) {

		var items = this.items;

		for (var i = items.length; i--;)
		{
			if (items[i].key === key)
			{
				return items[i];
			}
		}
	}
    
    
});
