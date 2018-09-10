yaxi.Slider = yaxi.Control.extend(function (Class, base) {
	
	
	
	var start = {};
	
	
	
	Class.ctor = function () {
		
		this.dom = document.createElement('div');
		this.dom.className = 'slider';
	}
	


	function ontouchstart(e) {
		
		start.x1 = e.changedTouches[0].clientX;
		start.x2 = this.firstChild.style.transform.match(/-?\d+/) | 0;
		
		this.firstChild.style.transition = '';
	}
	
	
	function ontouchmove(e) {
		
		var offset = start.x2 + e.changedTouches[0].clientX - start.x1 | 0;
		
		this.firstChild.style.transform = 'translate(' + offset + 'px, 0)';
	}
	
	
	function ontouchend(e) {
		
		var width = this.parentNode.clientWidth,
			offset = e.changedTouches[0].clientX - start.x1 | 0;

		if (offset < -width / 8)
		{
			if (this.index < this.pages - 1)
			{
				this.index++;
				offset = -width;
			}
			else
			{
				offset = 0;
			}
		}
		else if (offset > width / 8)
		{
			if (this.index > 0)
			{
				this.index--;
				offset = width;
			}
			else
			{
				offset = 0;
			}
		}
		else
		{
			offset = 0;
		}
		
		var dom = this.firstChild;
		
		dom.style.transform = 'translate(' + (start.x2 += offset) + 'px, 0)';
		dom.style.transition = 'transform 1s';
		
		if (offset)
		{
			dom = this.parentNode.lastChild;
			dom.querySelector('.active').classList.remove('active');
			dom.children[this.index].classList.add('active');
		}
	}
	


	this.render = function (items, lines, columns) {
	
		var array = [],
			index = 0,
			pages = Math.ceil(items.length / (lines * columns));
		
		array.push('<div class="slider-pages"><div>');
		
		for (var p = 0; p < pages; p++)
		{
			array.push('<div class="slider-page">');
			
			for (var i = 0; i < lines; i++)
			{
				if (items[index])
				{
					array.push('<div>');
				
					for (var j = 0; j < columns; j++)
					{
						var item = items[index++];
						
						if (item)
						{
							this.renderItem(array, item);
						}
						else
						{
							break;
						}
					}
					
					array.push('</div>');
				}
				else
				{
					break;
				}
			}
			
			array.push('</div>');
		}
		
		array.push('</div></div>');
		array.push('<div class="slider-footer">');
		
		array.push('<span class="slider-index active"></span>');
		
		for (var i = 1; i < pages; i++)
		{
			array.push('<span class="slider-index"></span>');
		}
		
		array.push('</div>');
		
		this.html(array.join(''), pages);
	}
	
	
	this.renderItem = function (array, item) {
		
	}
	
	
	this.html = function (html, pages) {
		
		var dom = this.dom;
		
		dom.innerHTML = html;
		
		dom = dom.querySelector('.slider-pages');
		
		dom.index = 0;
		dom.pages = pages;
		dom.ontouchstart = ontouchstart;
		dom.ontouchmove = ontouchmove;
		dom.ontouchend = ontouchend;
	}
	
	
});
