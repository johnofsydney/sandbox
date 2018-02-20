console.log("connected");

const s1 = (num) => {
  return (num % 2 )
}


const s2 = function(num) {
  return (num * (num + 1) ) / 2
}


// console.log(s1(4))
// console.log(s2(6));

// eggs (1)
// peanuts (2)
// shellfish (4)
// strawberries (8)
// tomatoes (16)
// chocolate (32)
// pollen (64)
// cats (128)


const allergyScoreDecoder = (num) => {
  let list = []
  if (num >= 128 ) {
    list.push("cats")
  }
  if (num >= 64 ) {
    list.push("pollen")
  }
  if (num >= 32 ) {
    list.push("chocolate")
  }
  if (num >= 16 ) {
    list.push("tomatoes")
  }
  if (num >= 8 ) {
    list.push("strawberries")
  }
  if (num >= 4 ) {
    list.push("shellfish")
  }
  return "here is a list of all allergises: " + list.join(', ')

}

console.log(allergyScoreDecoder(199));


$(document).ready( () => {
  console.log("ready");
})
