console.log("connected");


let catgif = document.getElementById('blackCat')

catgif.style.position = 'absolute';
catgif.style.left = '100px';
catgif.style.top = "100px";


const move = function () {

  oldLeft = parseInt(catgif.style.left);
  newLeft = oldLeft + 20
  catgif.style.left = newLeft + 'px'

  if (newLeft > 1000) {
    clearInterval(catTimerDone)
    console.log("im tired thats far enough");
  }

}


const catTimerDone = window.setInterval(move, 1000);
