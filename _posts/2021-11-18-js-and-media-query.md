---
layout: post
title : javascript & media queries
---

Triggering CSS animations with javascript & media queries.  

# CSS doesn't allow animating with `display: none;`  

CSS still doesn't allow animations on elements hidden with `display: none;` property. So I had to find a solution. Any kind of animation does not trigger if you change the state of the element with `display: none;`. 

So my solution was to use `opacity: 0` & `visibility: hidden`, to animate the links on this blog's navigtion bar at certain screen size, did not work.  

Because I needed the `display: none;` property on the hidden text.  
Needing an element collapsed, prevents any kind of animation from triggering though.

# So my solution was to just use javascript

Triggering an effect with `onmouseenter` & `onmouseleave` to change `display: none;` into `display: inline-block;` was trivial, yet the CSS animation on `opacity: 0;` to `opacity: 1;` was still not triggering.  

The actual solution was to use the asynchronicity of javascript.
Setting a timeout of 1ms, to trigger the opacity animation, after changing state of the hidden elements  
```javascript 
span.style.display="inline-block";
setTimeout(() => {
    span.style.opacity="1";
}, 1);
```
# In come the media queries

I only wanted to do the javascript animation triggering, when the screen size became too narrow for the whole words to display in the navigation bar.

```css
@media (max-width: 22rem) and (orientation: portrait) {
    a span {
        transition: all 0.5s;
        display: none;
    }
}
```
While useful to declare behaviour of CSS once the screen size reached this limit. It had one minor drawback.  

Once I triggered the javascript, the link was always hidden on `onmouseleave` event, regardless of the media query condition.

Hence I had to implement a simple javascript check, for when the screen changed orientation.

```javascript
function changeMediaQ () {
    let mq = window.matchMedia("(max-width: 22rem) and (orientation: portrait)");
    let checks = document.querySelectorAll('.check');
    mq.onchange = (e) => {
        if(!e.matches) {
            checks.forEach(element => {
                element.children[1].style.opacity="1";
                element.children[1].style.display="inline-block";
            });
        } else {
            checks.forEach(element => {
                element.children[1].style.opacity="0";
                element.children[1].style.display="none";
    
            });
        }
    }
}
```  
Which runs on `window.onload` event once and listenes to orientation change of a device and sets the correct value to the properties needed for the animation.  

# Conclusion

I really wanted to do all my looks with only CSS, but for this one feature, I had to compromise.  

It is a native javascript solution, called in the olden ways, directly from the element with html javascript events.  

I feel it is light weight enough for my current use case. If these edge cases persist in the future, I might have to implement a UI framework/library and work with that. But for now, I'm quite happy with the native solution.  
  
  
---