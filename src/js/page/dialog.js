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
