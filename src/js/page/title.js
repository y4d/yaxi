yaxi.Title = yaxi.Control.extend(function (Class) {
    
    

    yaxi.template(this, '<div class="yx-control yx-title"></div>');
    
    

    this.$properties({

        text: ''
    });



    this.__set_text = function (dom, value) {

        dom.textContent = value;
    }
	
	
	
});
