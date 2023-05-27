const INSURANCE_COST = 2.99;

let shippingCost = 9.99;
let isOrderValid = true;

let userAge = 20;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;



/** calcular costos de envío*/
if ((userAge > 65) || (userAge >= 18 && (hasPromoCode || cartValue > 300 || points > 500))) {
shippingCost = 0;
} else if (userAge < 18 && hasParentsApproval) {
shippingCost = shippingCost - 5;
} else if (userAge < 18) {
isOrderValid = false;
}

/** tomar en cuenta la aseguranza */
if (isOrderValid && addInsurance && !hasPromoCode) {
shippingCost += INSURANCE_COST;
}

/** mostrar mensaje */
if (isOrderValid) {
console.log(shippingCost);
} else {
console.log("No se puede ordenar si es menor que 21");
}
let shippingCost;
if (price > 50) {
    shippingCost = 0;
} else {
    shippingCost = 5;
}
console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0

let price = 10;
let shippingCost= price >50 ? 0:5
console.log(shippingCost);