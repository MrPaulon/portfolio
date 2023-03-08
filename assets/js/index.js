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
    }
    if (val == 2) {
        $(".hero").css("animation", "0.5s fade-up");
        setTimeout(() => {    
            $(".hero").css("display", "none");
        }, 385);
    }
}