(function (Math) {
    

    var pows = Object.create(null);
    
    var round = Math.round;



    Math.round2 = function (value, digits) {

        if ((digits |= 0) > 0)
        {
            var pow = pows[digits] || (pows[digits] = Math.pow(10, digits));

            // +0.00000001解决如2.135*100不等于213.5的问题
            return round(value * pow + 0.00000001) / pow;
        }

        // +0.00000001解决如2.135*100不等于213.5的问题
        return round(value + 0.00000001);
    }


    // 注: 不同浏览器toFixed有差异, chrome使用的是银行家舍入规则
    // 银行家舍入: 所谓银行家舍入法, 其实质是一种四舍六入五取偶(又称四舍六入五留双)法
    // 简单来说就是: 四舍六入五考虑, 五后非零就进一, 五后为零看奇偶, 五前为奇应舍去, 五前为偶要进一
    // 此处统一处理为四舍五入
    Object.defineProperty(Number.prototype, 'toFixed2', {

        enumerable: false,

        value: (1.115).toFixed(2) !== '1.11' ? (0).toFixed : function (digits) {

            if ((digits |= 0) > 0)
            {
                var pow = pows[digits] || (pows[digits] = Math.pow(10, digits));
    
                // +0.00000001解决如2.135*100不等于213.5的问题
                return (round(this * pow + 0.00000001) / pow).toFixed(digits);
            }
    
            // +0.00000001解决如2.135*100不等于213.5的问题
            return '' + round(this + 0.00000001);
        }
    });



})(Math);
