yaxi.Image = yaxi.Control.extend(function () {



    yaxi.template(this, '<img class="yx-control yx-image"></img>');
    
    

    this.$properties({

        // 图标路径
        src: ''
    });



}).register('Image');
