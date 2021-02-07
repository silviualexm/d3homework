/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

const firstPositiveNumbers = [1, 2, 3, 4, 5]


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let me = {
    name: "Silviu Alexandru",
    surname: "Murgu",
    email: "silviu.murgu@yahoo.com",
    age: 32,
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

me.hasDrivingLicense = true


/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete me.age


/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

let mySister = {
    name: "Claudia",
    surname: "Murgu",
    email: "claudia@yahoo.com"
}
//console.log(mySister)

let isTheSame = me.email === mySister.email? "Has the same email adress":"Has a diferent email adress"
//console.log(isTheSame)

/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50, they are eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculate totalCost based on this assumption.
*/

/*let totalShoopingCart = 60
let shippingCost = 10
let totalCost = totalShoopingCart > 50? totalShoopingCart + " Free Shipping !" : totalShoopingCart + shippingCost + " Shiping cost included !"*/
//console.log(totalCost)

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let totalShoopingCart = 40
let totalDiscounted = totalShoopingCart - (20*totalShoopingCart)/100
//console.log(totalDiscounted)
let shippingCost = 10
let totalCost = totalShoopingCart > 50? "Total cost is " + totalDiscounted + " Free Shipping !" : "Total cost is " + (totalDiscounted + shippingCost) + " Shiping cost included !"
//console.log(totalCost)

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let car = {
    brand: "VW",
    model: "Golf",
    licensePlate: "BT",
}
console.log(car)

let car1 = Object.assign({}, car)
car1.licensePlate = "IS"
console.log(car1)

let car2 = Object.assign({}, car)
car2.licensePlate = "BV"
console.log(car2)

let car3 = Object.assign({}, car)
car3.licensePlate = "BC"
console.log(car3)

let car4 = Object.assign({}, car)
car4.licensePlate = "SV"
console.log(car4)

let car5 = Object.assign({}, car)
car5.licensePlate = "NT"
console.log(car5)

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

const carsForRent = [car, car1, car2, car3, car4, car5,]
console.log(carsForRent)

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift()
carsForRent.pop()
console.log(carsForRent)

/* EXERCISE 11
Print in the console the TYPES of a car, of the licensePlate and of the brand properties.
*/

console.log(typeof(car.licensePlate), typeof(car.brand))


/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/
let car6 = {
    brand: "bmw",
    model: "m3",
}
let car7 = {
    brand: "audi",
    model: "a6",
}
let car8 = {
    brand: "ford",
    model: "focus",
}
let carsForSale = [car6, car7, car8,]

console.log(carsForSale.length)
/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

console.log(carsForSale)

/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT
*/


// another way to solve the exercise 11

//for(let car of carsForRent) {
//    console.log(typeof car.licensePlate + ":" + typeof car.brand)
//}
// this is the shorter way of this:
//for(let i = 0; i < carsForRent.length; i++) {
//    let car = carForRent[i]
//    console.log(typeof car.licensePlate + ":" + typeof car.brand)
//}