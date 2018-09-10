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




    this.__update_patch = function () {

        var changes = base.__update_patch.call(this),
            style = this.owner.$dom;

        if (style && (style = style.style))
        {
            for (var name in changes)
            {
                style[name] = changes[name];
            }
        }

        return changes;
    }


});
