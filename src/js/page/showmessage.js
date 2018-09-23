yaxi.showMessage = function (options) {

    var dialog, content, buttons, callback;

    if (typeof options === 'string')
    {
        options = {
            title: options
        }
    }
    
    if (buttons = (options || (options = {})).buttons)
    {
        for (var i = buttons.length; i--;)
        {
            if ((content = buttons[i]) && typeof content === 'string')
            {
                buttons[i] = {
                    text: content
                };

                if (i === 0)
                {
                    buttons[i].theme = 'primary';
                }
            }
        }
    }
    else
    {
        buttons = [
            {
                theme: 'primary',
                text: 'OK'
            },
            {
                text: 'Cancel'
            }
        ];
    }

    if ((content = options.content) && typeof content === 'string')
    {
        content = [
            {
                Class: yaxi.HtmlControl,
                html: content
            }
        ];
    }

    callback = options.callback;

    options = {
        className: 'yx-messagebox',
        header: options.title || '柚子钱包',
        host: {
            layout: 'row',
            style: {
                alignItems: 'center'
            },
            children: content
        },
        footer: {
            subtype: yaxi.Button,
            children: buttons,
            events: {

                tap: function (event) {

                    this.root.close();
                    callback && callback(event.target);
                }
            }
        }
    };
    
    dialog = new yaxi.Dialog(options);
    dialog.open();

    return dialog;
}


yaxi.prompt = function (options) {

    options = options || {};

    options.content = [
        {
            Class: options.password ? yaxi.Password : yaxi.TextBox,
            text: options.value,
            style: {
                width: '100%'
            }
        }
    ];

    return yaxi.showMessage(options);
}
