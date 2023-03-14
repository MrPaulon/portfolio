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
        $(".about").css("animation", "0.5s fade-up");
        $(".about").css("opacity", "0");

        setTimeout(() => {    
            $(".about").css("display", "none");
            $(".about").css("opacity", "0");

            $(".hero").css("display", "flex");
            $(".hero").css("animation", "0.5s reverse fade-down");
            setTimeout(() => {
                $(".hero").css("opacity", "1");
            }, 385);

        }, 385);
    }
    if (val == 2) {
        $(".hero").css("animation", "0.5s fade-up");
        $(".hero").css("opacity", "0");
        setTimeout(() => {    
            $(".hero").css("display", "none");
            $(".hero").css("opacity", "0");

            $(".about").css("display", "flex");
            $(".about").css("animation", "0.5s reverse fade-down");
            setTimeout(() => {
                $(".about").css("opacity", "1");
            }, 385);

        }, 385);
    }
}

function waitForScroll() {
    setTimeout(() => {
        canScroll = true
    }, 800)
}