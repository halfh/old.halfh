---
layout: post
title : javascript & media queries
---

Triggering CSS animations with javascript & media queries.  

# CSS doesn't allow animating with `display: none;`  

CSS still doesn't allow animations on elements hidden with `display: none;` property. So I had to find a solution. Any kind of animation does not trigger if you change the state of the element with `display: none;`. 

So my solution was to use `opacity: 0` & `visibility: hidden`, to animate the links on this blog's navigtion bar at certain screen size, did not work, Because I needed the `display: none;` property on the hidden text.  
Needing an element collapsed prevents any kind of animation from triggering though.

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