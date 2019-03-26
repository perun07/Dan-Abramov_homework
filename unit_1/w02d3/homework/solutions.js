//Verbal Questions
//MY Commented Answer//
// 1. Parameter is the variable in the declaration of the function. Argument is the actual value of this variable that gets passed to the fnction.
// Return gives you the specified value. Console.log runs the function/item you have built.

function checkPalindrome(palindrome) {
 const check = /[\W_]/g;
 //found regular expressions when looking on how to complete this. Super neat.
 palindrome = palindrome.toLowerCase().replace(check, '');
 const leng = palindrome.length;
 for (let i = 0; i < leng/2; i++) {
   if (palindrome[i] !== palindrome[leng - 1 - i]) {
       return false;
   }
 }
 return true;
}
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("RACECAR"));
console.log(checkPalindrome("Borscht"));

function sumArray(count) {
  if(!Array.isArray(count)) return;
  let total = 0;
  for (let i=0,l=count.length; i<l; i++) {
     total+=count[i];
  }
  return total;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));
