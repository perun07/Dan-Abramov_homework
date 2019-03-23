let cartTotal = 16.10
let roundedUpCart = Math.ceil(cartTotal)
let donation = (roundedUpCart - cartTotal).toFixed(2)
console.log(roundedUpCart)
console.log(donation)
