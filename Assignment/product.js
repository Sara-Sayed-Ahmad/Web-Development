"use strict";
/**
 * In this TypeScript code contains two sections:
 * 1. Task-4:
 *    - Defines an interface `Products` with name and price properties.
 *    - Creates an array of product objects `prodList`, conforming to the `Products` interface.
 *    - Creates a "totalPrice" function calculates the total price for all products in the array "prodList" using reduce method.
 *
 * 2. Task-5:
 *    - Defines an "emailValidation" function that takes an email (string).
 *    - Uses a regular expression to validate whether the email is valid or invalid.
 *
 * Instruction:
 * 1. Save this file as `product.ts`.
 * 2. Install TypeScript globally: npm install -g typescript
 * 3. Compile the TypeScript code to JavaScript: tsc product.ts / tsc
 * 4. Configure the typescript using tsconfig.json: tsc --init
 * 5. Use Watch Mode: tsc -w
*/
;
// Create an array of product objects (type Products)
const prodList = [
    { name: "Apple", price: 23 },
    { name: "Orange", price: 200 },
    { name: "Banana", price: 155 },
];
// Function calculate the total price of all products
function totalPrice(prodList) {
    const total = prodList.reduce((sum, prod) => sum + prod.price, 0);
    return total;
}
console.log(`Total price: ${totalPrice(prodList)}`);
// -----------------------------------------------------------
// Task-5:
//Check if an email address is valid or not
function emailValidation(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //"regular expression" to validate the basic email structure
    return emailRegex.test(email); //Returns true if valid, false if invalid
}
console.log(emailValidation('sarasayedahmad24@gmail.com')); //valid email
console.log(emailValidation("test./ljgmail.com")); //invalid email 
