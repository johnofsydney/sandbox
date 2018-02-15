console.log("connected");


arr = [1800, 1900, 2000, 1994, 1996]



const plopper = function (num) {
  let intCase = 0
  if ( num % 3 === 0 ) intCase = 3;
  if ( num % 5 === 0 ) intCase = 5;
  if ( num % 7 === 0 ) intCase = 7;
  if (( num % 3 === 0) && ( num % 5 === 0 )) intCase = 15
  if (( num % 3 === 0) && ( num % 7 === 0 )) intCase = 21
  if (( num % 5 === 0) && ( num % 7 === 0 )) intCase = 35

  switch (intCase) {
    case 0: {
      console.log(num + "");
      break;
    }
    case 3: {
      console.log("Pling");
      break;
    }
    case 5: {
      console.log("Plang");
      break;
    }
    case 7:{
      console.log("Plong");
      break;
    }
    case 15: {
      console.log("PlingPlang");
      break;
    }

    case 21: {
      console.log("PlingPlong");
      break;
    }
    case 35: {
      console.log("POlangPlong");
      break;
    }

    default: {
      console.log("default " + num);
    }


  }

}

_.each(arr, function(num) {
  // plopper(num)
})


const askSerge = function (words) {
  console.log(words);
  let answer

  if ( words.includes("?") ) answer = "sure"
  // if (words all caps) answer = "yell"
  if (words.length === 0) answer = "empty"


  switch (answer) {
    case "sure": {
      console.log("sure");
      break;
    }
    case "yell": {
      console.log("Whoa Chill Out");
      break;
    }
    case "empty": {
      console.log("Fine be that way");
      break;
    }

    default: {
      console.log("Whatever");
    }

  }


}

// askSerge ("ddd")


const isLeap = (num) => {
  let LeapYear = false
  if ( num % 4 === 0 ) LeapYear = true;
  if ( num % 100 === 0 ) LeapYear = false;
  if ( num % 400 === 0 ) LeapYear = true;

  return LeapYear
}

for (var i = 0; i < arr.length; i++) {
  // isLeap(arr[i])
}

_.each(arr, (num) => {
  // console.log(num + " --- " + isLeap(num));
})

const whatsMyLine = (num) => {
  if ( num > 1 ) {
    console.log(`${num} bottles of beer on the wall`);
  }
  if ( num === 1) {
    console.log(`${num}  bottle of beer on the all`)
    console.log("no more bottles of beer on the wall");
    }
}

const beerSong = (num1 = 99, num2 = 0, num3 = -2) => {
  arr = _.range(num1, num2, num3)
  _.each(arr, (curr) => {
  whatsMyLine(curr)
  })
}

// beerSong(99,0, -3)



const scrabble = (word) => {
  letterScores = {
    A: 1,
    E: 1,
    G: 2,
    C: 3,
    B: 3
  }
  arr = word.toUpperCase().split('')
  wordScore = 0;

  _.each(arr, function(letter,index) {
    let = letterScore = letterScores[letter]
    wordScore += letterScore
  })
  return wordScore
}

// console.log(scrabble("cabbage"));

const anagrammer = {
  checkWord: function (word, list) {
    for (var i = 0; i < list.length; i++) {
      if ( word.length === list[i].length ) {
        console.log("same length word");
        this.checkWord2(word, list[i])
      } else {
        console.log("not a match");
      }

    }
  },

  checkWord2: function (word, candidateMatch) {
    console.log(`checking ${word} against ${candidateMatch}`);
    if (word.split('').sort().join('') === candidateMatch.split('').sort().join('') ) {
      console.log(`${candidateMatch} is an anagram of ${word}`);
    }

  }
}


// anagrammer.checkWord("bob", ["fred", "james", "bob", "obo", "bbo"])


const spaceAge = (seconds, planet = "All") => {
  console.log(`starting spacge with input: ${seconds} ${planet}`);
  //   Given an age in seconds, calculate how old someone would be on:
  //
  // Earth: orbital period 365.25 Earth days, or 31557600 seconds
  // Mercury: orbital period 0.2408467 Earth years
  // Venus: orbital period 0.61519726 Earth years
  // Mars: orbital period 1.8808158 Earth years
  // Jupiter: orbital period 11.862615 Earth years
  // Saturn: orbital period 29.447498 Earth years
  // Uranus: orbital period 84.016846 Earth years
  // Neptune: orbital period 164.79132 Earth years
  // So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31 Earth-years old.
  //
  // There are 31557600 seconds in an Earth year.
  //
  // Bonus:
  // Have the option of either returning the ages on all planets, or any of the above planets individually.

  planets = {
    Earth: (seconds) => {
      let constant = 1
      console.log(`age on Earth: `, age(seconds, constant));


    },
    Mercury: (seconds) => {
      let constant = 0.24

      console.log(`age on Mercury: `, age(seconds, constant));
    }
  }

  age = (seconds, constant) => {
    return Math.round(seconds / 31557600 / constant)
  }

  if (planet === "All") {
    console.log("all planets");
    _.each(planets, (k,v) => {
      // console.log(k);
      this.planets[v](seconds)
    })
  } else {
    console.log("else");
    this.planets[planet](seconds)
  }

}

// spaceAge(1000000000, "Earth")
// spaceAge(1000000000, "Mercury")
// spaceAge(100000000)








$(document).ready( ()=> {
  console.log("jquery ready for action");


})
