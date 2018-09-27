console.log("connected");


let obj = {
  one: 1,
  two: 2,
  three: 3
}

let arr = [1, "two", true, 4.4]

for ( let [key, value] of Object.entries(obj) ) {
  console.log("of ", key, value);
}

for ( let key of Object.keys(obj) ) {
  console.log("keys: ", key);
}

for ( let value of Object.values(obj) ) {
  console.log("values: ", value);
}


for ( [key, value, three] in obj ) {
  console.log("in - weired ", key, value, three);
}

for ( let element of arr ) {
  console.log("of / array", element);
}

for ( let element in arr ) {
  console.log("in / array", element);
}

$(document).ready( () => {
  console.log("I'm ready");


})
