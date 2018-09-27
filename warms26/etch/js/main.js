console.log("connected");

const position = {
  left: 10,
  top: 10
}

const fillRect = function () {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillRect(position.left,position.top,10,10);
}

const clearRect = function () {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0,0,c.width,c.height);
  fillRect()

}


const getCoords = function () {
  var c = document.getElementById("myCanvas");
  debugger;
}

window.onkeypress = function(e){

  switch (e.key) {
    case "a":
      console.log("a");
      position.left -= 5
      fillRect()
      break;
    case "d":
      console.log("d");
      position.left += 5
      fillRect()
      break;
    case "s":
      console.log("s");
      position.top += 5
      fillRect()
      break;
    case "w":
      console.log("w");
      position.top -= 5
      fillRect()
      break;
    case "r":
      console.log("r");
      clearRect()
      break;
    default:
  }



};

$(document).ready( function () {
  console.log("ready");

  fillRect ()



})
