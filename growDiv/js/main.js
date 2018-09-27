console.log("connected");

$(document).ready( () => {
  console.log("ready");

  $('#clickMe').on('click', function () {
    console.log("clicked");
    $('#reveal').slideToggle('slow', function(){
         //This will toggle the div
    }); 
  })
})
