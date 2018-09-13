(function (yaxi) {



    var base = Array.prototype;

    var prototype = (yaxi.ObserveArray = ObserveArray).prototype = Object.create(base);

    var classes = yaxi.classes;

    var patches = yaxi.__patches;

    var update = yaxi.__patch_update;




    function patch(target) {

        if (!patches.delay)
        {
            patches.delay = setTimeout(update);
        }

        patches.push(target);
        target.__changed = 1;
    }

     

    function ObserveArray(owner, data) {

        var length;
    
        this.owner = owner;
    
        if (data && (length = data.length) > 0)
        {
            var Class = owner.$subtype,
                index = 0,
                item;
    
            for (var i = 0; i < length; i++)
            {
                item = data[i];
    
                if (item instanceof Class)
                {
                    item.__last_index = null;
                }
                else
                {
                    item = item ? createItem(Class, item) : new Class();
                }
    
                item.$parent = owner;
                this[index++] = item;
            }
    
            this.length = index;
        }
    }



    function createItem(Class, data) {

        var type;

        if ((type = data.Class) && typeof type === 'string')
        {
            type = classes[type];
        }

        return new (type || Class)(data);
    }


    function checkItems(self, items, list, index) {

        var owner = self.owner,
            Class = owner.$subtype || yaxi.Observe,
            length = items.length;

        while (index < length)
        {
            var item = items[index++];
            
            if (item instanceof Class)
            {
                if (item.destroyed)
                {
                    alert('the object has be destroyed, can not be reuse!');
                }
            }
            else
            {
                item = item ? createItem(Class, item) : new Class();
            }

            item.$parent = owner;

            list.push(item);
        }

        self.__changed || patch(self);

        return list;
    }
    


    prototype.length = 0;


    prototype.push = function () {

        if (arguments.length > 0)
        {
            return base.push.apply(this, checkItems(this, arguments, [], 0));
        }

        return this.length;
    }


    prototype.pop = function () {

        var item = base.pop.call(this);

        if (item)
        {
            item.$parent = null;

            this.__changed || patch(this);

            if (this.__original)
            {
                var changes = this.__changes;

                if (changes)
                {
                    changes.push(item);
                }
                else
                {
                    this.__changes = [item];
                }
            }
        }

        return item;
    }


    prototype.unshift = function () {

        if (arguments.length > 0)
        {
            return base.unshift.apply(this, checkItems(this, arguments, [], 0));
        }

        return this.length;
    }


    prototype.shift = function () {

        var item = base.shift.call(this);

        if (item)
        {
            item.$parent = null;

            this.__changed || patch(this);

            if (this.__original)
            {
                var changes = this.__changes;

                if (changes)
                {
                    changes.push(item);
                }
                else
                {
                    this.__changes = [item];
                }
            }
        }

        return item;
    }


    prototype.splice = function (index, length) {

        var list;

        switch (arguments.length)
        {
            case 0:
                return [];

            case 1:
                list = base.splice.call(this, index);
                break;

            case 2:
                list = base.splice.call(this, index, length);
                break;

            default:
                list = checkItems(this, arguments, [index, length], 2);
                list = base.splice.apply(this, list);
                break;
        }

        if (list.length > 0)
        {
            for (var i = list.length; i--;)
            {
                list[i].$parent = null;
            }

            this.__changed || patch(this);

            if (this.__original)
            {
                var changes = this.__changes;

                if (changes)
                {
                    changes.push.apply(changes, list);
                }
                else
                {
                    this.__changes = list;
                }
            }
        }

        return list;
    }


    prototype.clear = function () {

        var list = base.splice.call(this, 0);

        if (list.length > 0)
        {
            for (var i = list.length; i--;)
            {
                list[i].$parent = null;
            }

            this.__changed || patch(this);

            if (this.__original)
            {
                var changes = this.__changes;

                if (changes)
                {
                    changes.push.apply(changes, list);
                }
                else
                {
                    this.__changes = list;
                }
            }
        }

        return list;
    }


    prototype.sort = function (sortby) {

        if (this.length > 0)
        {
            base.sort.call(this, sortby);
            this.__changed || patch(this);
        }

        return this;
    }


    prototype.reverse = function () {

        if (this.length > 0)
        {
            base.reverse.call(this);
            this.__changed || patch(this);
        }

        return this;
    }




    prototype.__check_update = function () {
                
        var original = this.__original,
            items,
            item1,
            item2;

        if (!original)
        {
            return null;
        }
    
        if (changes = this.__changes)
        {
            item1 = this.owner;

            for (var i = changes.length; i--;)
            {
                item2 = changes[i];

                // 新创建或重新加进来的不处理移除变更
                if (item2.__last_index != null && item2.$parent !== item1)
                {
                    if (items)
                    {
                        items.push(item2);
                    }
                    else
                    {
                        items = [item2];
                    }
  
                    item2.__last_index = null;
                }
            }

            if (items)
            {
                changes = [items, null];
                items = null;
            }
        }
        
        if (!changes)
        {
            changes = [null, null];
        }
            
        for (var i = this.length; i--;)
        {
            item1 = original[i];
            item2 = this[i];

            if (item1 !== item2)
            {
                // 节点当前索引
                item2.__change_index = i;

                // 新添加的节点没有index
                if (item2.__last_index == null)
                {
                    if (items)
                    {
                        items.push(item2);
                    }
                    else
                    {
                        items = changes[1] = [item2];
                    }
                }
                else // 节点顺序发生变化
                {
                    changes.push(item2);
                }
            }
        }

        return changes;
    }


    prototype.__update_patch = prototype.commit = function () {

        var length = this.length;

        if (length > 0)
        {
            var original = this.__original;
            
            if (original)
            {
                original.splice(length);
            }
            else
            {
                original = this.__original = [];
            }

            for (var i = 0; i < length; i++)
            {
                (original[i] = this[i]).__last_index = i;
            }
        }
        else
        {
            this.__original = null;
        }

        this.__changes = null;
        this.__changed = 0;
    }



})(yaxi);
