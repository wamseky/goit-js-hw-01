`use strict`;


function makeTransaction(quantity, pricePerDroid) {
const totalPrice = pricePerDroid * quantity;

return `You ordered ${quantity} droids worth ${totalPrice} credits!`
};

makeTransaction(5, 3000);
