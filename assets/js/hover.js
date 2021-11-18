function showDisplay (e){
    // console.log(e);
    if (!window.matchMedia("(max-width: 22rem) and (orientation: portrait)").matches) {
        // console.log('media query disabled effect');
        return ;
    }
    let span = e.children[1];
    span.style.display="inline-block";
    setTimeout(() => {
        span.style.opacity="1";
    }, 1);
    return ;
}
function hideDisplay (e){
    // console.log(e);
    if (!window.matchMedia("(max-width: 22rem) and (orientation: portrait)").matches) {
        // console.log('media query disabled effect');
        return ;
    }
    let span = e.children[1];
    span.style.opacity="0";    
    setTimeout(() => {
        span.style.display="none";    
    }, 500);
    return ;
}
function changeMediaQ () {
    let mq = window.matchMedia("(max-width: 22rem) and (orientation: portrait)");
    mq.onchange = (e) => {
        // console.log('mq.onchange event');
        if(!e.matches) {
            let checks = document.querySelectorAll('.check');
            checks.forEach(element => {
                element.children[1].style.opacity="1";
                element.children[1].style.display="inline-block";
    
            });
        } else {
            let checks = document.querySelectorAll('.check');
            checks.forEach(element => {
                element.children[1].style.opacity="0";
                element.children[1].style.display="none";
    
            });
        }
    }
    
}
