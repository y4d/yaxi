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
