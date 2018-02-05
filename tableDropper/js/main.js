console.log("connected");
let state = {
  nextTableNumber: 1
}




$(document).ready( function () {
  console.log("ready");


  $('.table').on('click', function () {
    $(this).toggleClass("selected")
  })


  $('#floor').on('click', (e) => {

    let x = e.pageX
    let y = e.pageY
    // console.log(e.target);
    // debugger;

    if ( $('.selected').length === 0 ) {
      console.log("nothing selected");
    } else if (( $('.selected').length !== 0 ) && ($('.icon').length !== 0 )) {
      let $table = $('.selected').
        clone().
        text(state.nextTableNumber).
        css({
          left: x - 45,
          top: y - 45,
          width: "50px",
          height: "50px"
        }).
        removeClass("selected").
        removeClass("icon").
        addClass("placed").
        appendTo('#floor');

      state.nextTableNumber ++

    }
    if (e.target.className === "table placed") {
      let $t = $(e.target)
      console.log($t);
      $t.toggleClass("selected")

    }




  })
})
