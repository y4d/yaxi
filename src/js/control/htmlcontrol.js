yaxi.HtmlControl = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<div class="yx-control yx-htmlcontrol"></div>');



    this.$properties({

        html: ''
    });




    this.__set_html = function (dom, value) {

        dom.innerHTML = value;
    }



});
