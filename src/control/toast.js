(function () {


    var dom = document.createElement('div');

    var loading = '<svg class="yx-toast-loading" aria-hidden="true"><use xlink:href="#icon-loading"></use></svg>';

    var delay;



    dom.className = 'yx-toast';


    function close() {

        delay = 0;

        if (dom.parentNode)
        {
            dom.parentNode.removeChild(dom);
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
    
        dom.innerHTML = (options.loading ? loading : '') + '<span>' + options.text + '</span>';
    
        if (!dom.parentNode)
        {
            document.body.appendChild(dom);
        }

        style.cssText = options.style || '';
        style.marginLeft = -(dom.offsetWidth >> 1) + 'px';

        delay = setTimeout(close, options.time || 2500);
    } 


    this.toast.hide = function () {

        if (delay)
        {
            clearTimeout(delay);
            delay = 0;
        }

        if (dom.parentNode)
        {
            dom.parentNode.removeChild(dom);
        }
    }



}).call(yaxi);
