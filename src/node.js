yaxi.Node = jiaxin.Observe.extend(function (Class, base) {



    this.$properties({
        
        accessKey: '',
        alt: '',
        checked: false,
        className: '',
        disabled: false,
        href: '',
        id: '',
        lang: '',
        max: 0,
        maxLength: 0,
        min: 0,
        minLength: 0,
        multiple: false,
        name: '',
        placeholder: '',
        readonly: false,
        src: '',
        type: '',
        tagName: '',
        title: '',
        value: null,
        key: null,
        tag: null
    });



    Object.defineProperty(this, 'style', {

        get: function () {

            var value = new jiaxin.Style(this);

            Object.defineProperty(this, 'style', {

                value: value,
                writable: false
            });

            return value;
        }
    });



    Object.defineProperty(this, 'children', {

        get: function () {

            var value = new jiaxin.ObserveArray(this);

            Object.defineProperty(this, 'children', {

                value: value,
                writable: false
            });

            return value;
        }
    });


});
