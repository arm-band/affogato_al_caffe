function scroll2Top() {
    const currentY = window.pageYOffset;
    window.scrollTo(0, Math.floor(currentY * 0.8));
    console.log(currentY);
    if (currentY > 0) {
        window.setTimeout(scroll2Top, 10);
    }
}

const scrollTop = document.querySelector('#scrollTop');
scrollTop.addEventListener('click', scroll2Top);

document.addEventListener('scroll', function() {
    const currentY = window.pageYOffset;
    const showClass = 'show';
    if(currentY > 400) {
        if(!scrollTop.classList.contains(showClass)) {
            scrollTop.classList.add(showClass);
        }
    }
    else {
        if(scrollTop.classList.contains(showClass)) {
            scrollTop.classList.remove(showClass);
        }
    }
});
