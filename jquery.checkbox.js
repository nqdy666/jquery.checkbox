(function ($) {

    /**
     * 使用样例
     * $.QjzdCheckbox($labelObjs, {checked: true});
     * $.QjzdCheckbox($inputObjs, {checked: true})
     * $.QjzdCheckbox($labelObjs, true);
     * $.QjzdCheckbox($labelObjs);
     * @param $labelObjs
     * @param opt
     * @returns {{}}
     * @constructor
     */
    $.QjzdCheckbox = function($labelObjs, opt) {
        if (typeof($labelObjs) !== 'object') {
            $labelObjs = $($labelObjs);
        }
        if ($labelObjs.is("input")) {
            $labelObjs = $labelObjs.parent();
        }
        var options = $.extend({}, $.QjzdCheckbox.defaults);
        //设置options入参
        var setOptions = function (opt) {
            if (typeof (opt) === "boolean") {
                var checked = opt;
                opt = {};
                opt.checked = checked;
            } else {
                if (typeof(opt) !== 'object') {
                    opt = {};
                }
            }
            options = $.extend(options, opt);
        };
        setOptions(opt);

        $labelObjs.addClass("checkbox");
        $labelObjs.each(function() {
            var $that = $(this);
            $that.find('input').unbind("click").on('click',function() {
                options.clickCallback($(this));
            });
            $that.find('input').unbind("change").on('change',function() {
                if ($(this).prop("checked")) {
                    $that.addClass('active');
                } else {
                    $that.removeClass('active');
                }
            });
            if (options.checked) {
                $that.find('input').prop('checked',true).trigger("change");
            } else {
                $that.find('input').prop('checked',false).trigger("change");;
            }
        });

        var api = {};
        /**
         * 如果对象在$labelObjs中设置checked属性
         * 设置样例
         * setChecked(); 全部设置true
         * setChecked(true); 全部设置true
         * setChecked($labelObj, false); 设置一个
         * setChecked($inputObj, false); 设置一个
         * setChecked($labelObjs, false); 设置多个
         * @param $lbObj
         * @param checked
         */
        api.setChecked = function ($lbObj, checked) {
            if (typeof ($lbObj) === "undefined") {
                $lbObj = $labelObjs;
            } else if (typeof ($lbObj) === "boolean") {
                checked = $lbObj;
                $lbObj = $labelObjs;
            } else if (typeof ($lbObj) !== "object") {
                $lbObj = $($lbObj);
            }
            if ($lbObj.is("input")) {
                $lbObj = $lbObj.parent();
            }
            if (typeof (checked) !== "boolean") {
                checked = true;
            }
            if ($labelObjs.closest($lbObj).length > 0) {
                $lbObj.find("input").prop("checked", checked).trigger("change");
            }
        };
        /**
         * 如果取第一个对象的checked属性
         * 使用样例
         * getChecked() 取第一个checked属性
         * getChecked($lbObj) 取checked属性
         * getChecked($input) 取checked属性
         * getChecked($labelObjs) 取$labelObjs第一个checked属性
         * @param $lbObj
         * @returns {*}
         */
        api.getChecked = function ($lbObj) {
            if (typeof ($lbObj) === "undefined") {
                $lbObj = $labelObjs;
            } else if (typeof ($lbObj) !== "object") {
                $lbObj = $($lbObj);
            }
            if ($lbObj.is("input")) {
                $lbObj = $lbObj.parent();
            }
            if ($labelObjs.closest($lbObj).length > 0) {
                var $inputObj = $lbObj.find('input');
                if ($inputObj.length > 0) {
                    return $inputObj.eq(0).prop("checked");
                }
            }
            return undefined;
        };
        /**
         * 注册事件
         * click事件，在被点击后会被触发
         * @param type
         * @param callback
         */
        api.on  = function(type, callback) {
            if (typeof (callback) === "function") {
                switch (type) {
                    case "click":
                        options.clickCallback = callback;
                        break;
                    default :
                        break;
                }
            }
        };

        /**
         * 触发事件
         * @param type 事件类型
         * @param $obj 需要触发的对象，该对象必须是objs的子元素
         */
        api.trigger = function(type, $lbObj) {
            if (typeof ($lbObj) === "undefined") {
                $lbObj = $labelObjs;
            } else if (typeof ($lbObj) !== "object") {
                $lbObj = $($lbObj);
            }
            if ($lbObj.is("input")) {
                $lbObj = $lbObj.parent();
            }
            switch (type) {
                case "click":
                    if ($labelObjs.closest($lbObj).length > 0) {
                        $lbObj.find('input').trigger(type);
                    }
                    break;
                default :
                    break;
            }
        };
        return api;
    };
    //默认参数
    $.QjzdCheckbox.defaults = {
        checked: false,
        clickCallback: $.noop
    };

    $.fn.checkbox = function (options, callback) {
        var api;
        if(this && this.length > 0){
            api = $.QjzdCheckbox(this, options);
            if ($.isFunction(callback)) {
                callback.apply(api);
            }
        }
        return this;
    };
}(jQuery));