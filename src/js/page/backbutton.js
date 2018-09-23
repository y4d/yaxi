yaxi.BackButton = yaxi.Control.extend(function (Class, base) {



    yaxi.template(this, '<span class="yx-control yx-backbutton yx-icon"><svg aria-hidden="true"><use xlink:href="#icon-back"></use></svg></span>');



    Class.ctor = function (data) {

        base.constructor.call(this, data);
        this.on('tap', handleTap.bind(this));
    }



    function handleTap(event) {

        this.root.close('BACK');
    }


});
