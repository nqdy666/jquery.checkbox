# jquery.checkbox
### 效果
 ![checkbox.png](http://qjzd.qiniudn.com/Fk-9njI6XnbWfkq5PoQkxm812IFm)
### 依赖
jquery-1.11.2.min.js
### 使用
引用css
`<link rel="stylesheet" type="text/css" href="checkbox.css"/>`
引用js
`<script type="text/javascript" src="jquery.checkbox.js"></script>`
### 基本方法
在html页面上, input checkbox一定要包含一个label
```
<label id="labelCb"><input type="checkbox" id="inputCb"/>我是新checkbox</label>
$("#labelCb").checkbox();
```
### 高级用法
```
初始化
var checkboxObjs = $.QjzdCheckbox($labelObjs, {checked: true});
var checkboxObjs = $.QjzdCheckbox($inputObjs, {checked: true})
var checkboxObjs = $.QjzdCheckbox($labelObjs, true);
var checkboxObjs = $.QjzdCheckbox($labelObjs);
setChecked方法
checkboxObjs.setChecked(); 全部设置true
checkboxObjs.setChecked(true); 全部设置true
checkboxObjs.setChecked($labelObj, false); 设置一个
checkboxObjs.setChecked($inputObj, false); 设置一个
checkboxObjs.setChecked($labelObjs, false); 设置多个
getChecked
checkboxObjs.getChecked() 取第一个checked属性
checkboxObjs.getChecked($lbObj) 取checked属性
checkboxObjs.getChecked($input) 取checked属性
checkboxObjs.getChecked($labelObjs) 取$labelObjs第一个checked属性
```
