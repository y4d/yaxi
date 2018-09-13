yaxi.Panel = yaxi.Control.extend(function (Class, base) {

    
    

    yaxi.template(this, '<div class="yx-control yx-panel"></div>');



    this.$subtype = yaxi.Control;




    this.$properties({

        layout: ''
    });



    Object.defineProperty(this, 'children', {

        get: function () {

            return this.__init_children();
        }
    });




    this.__c_children = true;

    
    this.__init_children = function (data) {

        var children = this.__children;

        if (!children)
        {
            children = this.__children = new yaxi.ObserveArray(this, data);

            children.__changed = 1;
            children.__update_patch = childrenPatch;
    
            Object.defineProperty(this, 'children', {
    
                value: children,
                writable: false
            });
        }

        return children;
    }



    // 指定默认子类型
    this.__c_subtype = '$subtype';

    this.__set_subtype = false;



    // 模型
    this.model = null;


    this.__c_model = true;

    this.__set_model = false;


    this.__init_model = function (model) {

        if (model)
        {
            (this.model = model instanceof yaxi.Model ? model : new yaxi.Model(model)).bind(this);
        }
    }


    // 模板
    this.template = null;


    this.__c_template = true;

    this.__set_template = false;


    this.__init_template = function (template) {

        this.template = template;
    }



    this.findByKey = function (key, deep) {

        var children = this.__children;

        if (children)
        {
            for (var i = 0, l = children.length; i < l; i++)
            {
                var item = children[i];

                if (item.key === key)
                {
                    return item;
                }

                if (deep && item.__children && (item = item.findByKey(key, true)))
                {
                    return item;
                }
            }
        }
    }
    


    this.destroy = function () {

        var children = this.__children;

        if (children)
        {
            for (var i = children.length; i--;)
            {
                children[i].destroy();
            }
        }

        base.destroy.call(this);
    }





    this.__set_layout = function (dom, value) {

        var classList = dom.classList,
            layout = this.__layout;

        if (layout)
        {
            classList.remove(layout);
        }

        classList.add(this.__layout = 'yx-layout-' + value);
    }


    this.render = function () {

        var dom = base.render.call(this),
            children = this.__children;

        if (children)
        {
            for (var i = 0, l = children.length; i < l; i++)
            {
                dom.appendChild(children[i].render());
            }

            children.commit();
        }
        else
        {
            this.children.__changed = 0;
        }

        return dom;
    }



    function childrenPatch(changes) {

        var list;

        if (list = changes[0])
        {
            removeChildNodes(list);
        }

        if (list = changes[1])
        {
            var dom = this.owner.$dom;

            for (var i = list.length; i--;)
            {
                dom.appendChild(list[i].$dom || list[i].render());
            }

            if (changes[2])
            {
                changes = changes.slice(2);
                changes.push.apply(changes, list);
            }
            else
            {
                changes = list;
            }

            sortChildNodes(dom, changes);
        }
        else if (changes[2])
        {
            sortChildNodes(this.owner.$dom, changes.slice(2));
        }

        this.commit();
    }


    function sortChildNodes(dom, items) {

        var nodes = dom.children,
            item;

        items.sort(sortFn);

        for (var i = items.length; i--;)
        {
            item = items[i];
            dom.insertBefore(item.$dom, nodes[item.__change_index])
        }
    }


    function sortFn(a, b) {

        return a.__change_index - b.__change_index;
    }


    function removeChildNodes(items) {

        for (var i = items.length; i--;)
        {
            var item = items[i],
                dom = item.$dom,
                any;

            if (dom && (any = dom.parentNode))
            {
                any.removeChild(dom);
            }

            // 如果没有父节点且不缓存则销毁组件
            if (!item.$parent && !item.cached)
            {
                item.$dom = dom.$control = null;

                if (item.destroy)
                {
                    item.destroy();
                }
            }
        }
    }



}).register('Panel');

