# JSYG.Draggable
Draggable plugin for JSYG framework

##### Demo
[http://yannickbochatay.github.io/JSYG.Draggable/](http://yannickbochatay.github.io/JSYG.Draggable/)

##### Installation
```shell
bower install jsyg-draggable
```


##### Example

HTML
```html
<svg width="100%" height="300" class="container">
    <rect class="drag" x="5%" width="80" height="40" fill="pink"/>
</svg>
<div class="container">
    <div class="drag" style="width:80px;height:40px;background-color:pink"></div>
</div>
```

Javascript
```javascript
JSYG(".drag").draggable({
    bounds:0,
    ondrag:function() {
       var dim = JSYG(this).getDim();
       console.log(dim.x,dim.y);
    }
});
```


