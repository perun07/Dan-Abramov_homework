/////
//Javascript Reps
/////
//easy going//
for (let count=1; count <= 20; count++) {
	console.log(count);
}
//get even//
for (let getEven = 0; getEven < 202; getEven++  ){
  if (getEven % 2 ===0) {
    console.log(getEven)
  }
}
//Fizz Buzz//
for (var i = 1; i <= 100; i++) {
  var f = i % 3 == 0, b = i % 5 == 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}
//Wild Wild Life//
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
plantee [2] = 5001
console.log(plantee)
wolfy [3] = "Gotham City"
// pretty neat this stayed with wolfy because I spliced it just a little futher done.
console.log(wolfy)
dart [4] = "Hawkins"
console.log(dart)
wolfy.splice(0,1,"Gameboy")
console.log(wolfy)
//Ninja Turtles
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael","Michelangelo"]
for (let uppercase of ninjaTurtles) {
  // uppercase = ninjaTurtles
  console.log(uppercase.toUpperCase())
}
//favMovies
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8])
console.log(favMovies.sort())
console.log(favMovies.pop())
