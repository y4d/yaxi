yaxi.Style = yaxi.Observe.extend(function (Class, base) {
    


    this.$properties((function () {

        var properties = {},
            style = document.documentElement.style,
            regex = /^(?:webkit|ms|moz|o)([A-Z])/;

        function replace(_, key) {

            return key.toLowerCase();
        }

        for (var name in style)
        {
            switch (name)
            {
                case 'cssFloat':
                case 'styleFloat':
                    properties.float = { alias: name, defaultValue: '' };
                    break;

                case 'cssText':
                    break;

                default:
                    properties[name.replace(regex, replace)] = { alias: name, defaultValue: '' };
                    break;
            }
        }

        return properties;

    })());



    this.__check_update = function () {

        return this.owner.$dom && this.__changes;
    }


    this.__update_patch = function (changes) {

        var style = this.owner.$dom.style;

        for (var name in changes)
        {
            style[name] = this['__v_' + name] = changes[name];
        }

        this.__changes = null;
    }


});
