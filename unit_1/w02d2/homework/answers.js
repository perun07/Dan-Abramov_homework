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
	//got stuck calling the function....
}
//favMovies
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8])
console.log(favMovies.sort())
console.log(favMovies.pop())
favMovies.push("Guardians of the Galaxy")
favMovies.push("Gladiator")
console.table(favMovies)

const revFavMovies = favMovies.reverse() ;
console.table(revFavMovies)

favMovies.shift();
console.log(favMovies)

favMovies.unshift("Gladiator")
console.log(favMovies)

favMovies.splice(favMovies.indexOf('Django Unchained'),1,"Avatar")
console.log(favMovies)
const favMoviesSlice = favMovies.slice(4,6)
console.log(favMoviesSlice)

//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(whereIsWaldo.indexOf('Eggbert'),1)
console.log(whereIsWaldo)
whereIsWaldo[1].splice(whereIsWaldo[1].indexOf('Neff'),1,'No One')
//need to remove Neff
console.log(whereIsWaldo)

console.log(whereIsWaldo[2][1][1])
// }
//Need to get Waldo to list

//Excited Kitten
const arr = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..." ]
for (let i = 1; i < 21; i++) {
 // if (i % 2 === 0)
 	console.log("Love me, pet me! HSSSSSS!", +i)
	if (i % 2 === 0) {
	const yo = arr[Math.floor(Math.random()*3)]
	console.log(yo)
	}
	}
//Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort()
// const total = 0;
// for (let i = 0; i < nums.length; i++) {
// 	// total += nums[i];
// }
const median = nums.length/2;
// let lowMid = Math.floor((nums.length + 1)/2)
// let highMid = Math.ceil((nums.length - 1)/2)
// let median = (lowMid + highMid) / 2;
console.log(nums[Math.floor(median)])
// console.log(median)
//realized I was looking for the average/mean and I should have been going Median
