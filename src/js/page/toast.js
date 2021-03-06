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
