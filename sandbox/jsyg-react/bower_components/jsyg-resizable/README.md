# JSYG.Resizable
Resizable plugin for JSYG framework

##### Demo
[http://yannickbochatay.github.io/JSYG.Resizable/](http://yannickbochatay.github.io/JSYG.Resizable/)

##### Installation
```shell
bower install jsyg-resizable
```


##### Example

HTML
```html
<svg width="100%" height="300" class="container">
    <rect class="resize" width="80" height="40" fill="pink"/>
</svg>
<div class="container">
    <div class="resize" style="width:80px;height:40px;background-color:pink"></div>
</div>
```

Javascript
```javascript
JSYG(".resize").resizable({
    bounds:0,
    ondrag:function() {
       var dim = JSYG(this).getDim();
       console.log(dim.width,dim.height);
    }
});
```