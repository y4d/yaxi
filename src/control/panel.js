yaxi.Panel = yaxi.Control.extend(function (Class, base) {

    
    
    var fragment = document.createDocumentFragment();



    yaxi.template(this, '<div class="yx-control yx-panel"></div>')



    this.$subtype = yaxi.Control;




    Object.defineProperty(this, 'children', {

        get: function () {

            return this.__init_children();
        }
    });




    this.__c_children = '__init_children';

    
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



    // 模型
    this.model = null;


    this.__c_model = '__init_model';

    this.__set_model = false;


    this.__init_model = function (model) {

        if (model)
        {
            (this.model = model instanceof yaxi.Model ? model : new yaxi.Model(model)).bind(this);
        }
    }


    // 模板
    this.template = null;


    this.__c_template = '__init_template';

    this.__set_template = false;


    this.__init_template = function (template) {

        this.template = template;
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




    this.update = function () {

        var dom = base.update.call(this),
            children = this.__children;

        if (children)
        {
            var host = fragment;

            for (var i = 0, l = children.length; i < l; i++)
            {
                host.appendChild(children[i].update());
            }

            dom.appendChild(host);
            children.commit();
        }
        else
        {
            this.children.__changed = 0;
        }

        return dom;
    }



    function childrenPatch() {

        var changes = this.getChanges(),
            list,
            item;

        if (!changes)
        {
            this.owner.update();
            return;
        }

        if (list = changes[0])
        {
            removeChildNodes(list);
        }

        if (list = changes[1])
        {
            var host = fragment,
                dom = this.owner.$dom;

            for (var i = list.length; i--;)
            {
                if (!(item = list[i]).$dom)
                {
                    host.appendChild(item.update());
                }
            }

            if (changes[2])
            {
                changes = changes.slice(2);
                changes.push.apply(list, changes);
            }
            else
            {
                changes = list;
            }

            dom.appendChild(host);
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
            dom.replaceChild(item.$dom, nodes[item.__change_index])
        }
    }


    function sortFn(a, b) {

        return a.__change_index > b.__change_index;
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

