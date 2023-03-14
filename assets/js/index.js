var pageActive = 1;
var canScroll = true

window.onwheel = e => {
    if(e.deltaY >= 75 && canScroll == true){
        canScroll = false
        waitForScroll()
        pageActive++;
        changePage(pageActive);
        console.log('Scroll Down');
    } else if(e.deltaY <= -75 && canScroll == true ) {
        canScroll = false
        waitForScroll()
        pageActive--;
        changePage(pageActive);
        console.log('Scroll Up');
    }
  }

function changePage(val) {
    console.log(val)
    if (val == 1) {
        $(".hero").css("display", "flex");
        $(".hero").css("animation", "0.5s reverse fade-down");
        setTimeout(() => {    
            $(".hero").css("opacity", "1");
        }, 385);
    }
    if (val == 2) {
        $(".hero").css("animation", "0.5s fade-up");
        setTimeout(() => {    
            $(".hero").css("display", "none");
            $(".hero").css("opacity", "0");
            $(".about").css("display", "flex");
        }, 385);
    }
}

function waitForScroll() {
    setTimeout(() => {
        canScroll = true
    }, 800)
}