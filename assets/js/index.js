var pageActive = 1;

window.onwheel = e => {
    if(e.deltaY >= 100 && e.deltaY <= 150){
      pageActive++;
      changePage(pageActive);
      console.log('Scroll Down');
    } else if(e.deltaY <= -100 && e.deltaY >= -150 ) {
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
            $(".about").css("display", "block");
        }, 385);
    }
}