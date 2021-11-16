function showDisplay (e){
    let span = e.children[1];
    span.style.display="inline-block";
    setTimeout(() => {
        span.style.opacity="1";
    }, 1);
    return ;
}
function hideDisplay (e){
    let span = e.children[1];
    span.style.opacity="0";    
    setTimeout(() => {
        span.style.display="none";    
    }, 500);
    return ;
}
