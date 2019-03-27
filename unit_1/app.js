console.log("hi")
// alert('S\up?');
const yourAnswer = prompt ('How is it going?');
console.log(yourAnswer)


const yourAnswer = prompt('Do you like apples'), 'Yes/No');

If(yourAnswer == "Yes"){
  console.log('Excellent!');
  else if (yourAnswer == 'No'){
    console.log('What')
    else {
      console.log('Does not compute')
    }
  }
}

const greet = () => {
  alert('Hi!');
}
const sayBye = () => {
  alert('Bye')
}

if (yourAnswer === 'Arriving') {
  greet ();
  else {
    sayBye();
  }
}

let action = null
while (action !== "stop"){
  action = prompt('What do you want to do', "Your action");
}
