yaxi.showMessage = function (options) {

    var dialog, content, callback;

    if (typeof options === 'string')
    {
        options = {
            header: options
        }
    }
    else
    {
        options = options || {};
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
        header: options.header || yaxi.showMessage.header,
        content: {
            layout: 'row',
            style: {
                alignItems: 'center'
            },
            children: content
        },
        footer: {
            subtype: yaxi.Button,
            children: options.buttons || [
                {
                    theme: 'primary',
                    key: 'OK',
                    text: '确定'
                },
                {
                    key: 'Cancel',
                    text: '取消'
                }
            ],
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

    var callback = options && options.callback;

    options = options || {};

    callback && (options.callback = function (button) {

        callback(button.root.findByKey('input').text, button);
    });

    options.content = [
        {
            Class: options.password ? yaxi.Password : yaxi.TextBox,
            key: 'input',
            text: options.value || '',
            style: {
                width: '100%'
            }
        }
    ];

    return yaxi.showMessage(options);
}
