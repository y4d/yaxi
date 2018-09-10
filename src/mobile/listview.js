yaxi.ListView = yaxi.Control.extend(function (Class, base) {



	Class.ctor = function (items) {

		var dom = this.dom = document.createElement('div');

		dom.className = 'listview';
		dom.addEventListener('tap', handleTap.bind(this));

		if (items)
		{
			this.load(items);
		}
	}



	this.load = function (items) {

		var array = [],
			item,
			any;

		for (var i = 0, l = items.length; i < l; i++)
		{
			item = items[i];
			
			array.push('<div class="listview-item', (any = item.itemClass) ? ' ' + any : '', '" key="', item.key, '">');
			
			if (any = item.svg)
			{
				array.push('<span class="listview-item-icon">',
					'<svg class="icon" aria-hidden="true">',
						'<use xlink:href="#', any, '"></use>',
					'</svg>',
				'</span>');
			}
			else if (any = item.icon)
			{
				array.push('<span class="listview-item-icon ', any, '"></span>');
			}
			
			if (any = item.text)
			{
				array.push('<span class="listview-item-text">', any, '</span>');
			}

			array.push('</div>');
		}

		this.dom.innerHTML = array.join('');
	}



	function handleTap(event) {

		var dom = this.domByClass(event.target, 'listview-item');

		if (dom)
		{
			this.trigger('item-tap', {

				dom: dom,
				key: dom.getAttribute('key')
			});
		}
	}


});
