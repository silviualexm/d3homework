/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[ 1 , 3, 5] ==> [5 , 3, 1]
*/

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(myNumbers.reverse())



/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

console.log(Math.max(...myNumbers))


/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

console.log(Math.min(...myNumbers))

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

/*for (i = 0; i < myNumbers.length; i++) {
    if(myNumbers[i] % 2 === 0) {
        console.log(myNumbers[i])
    }
}
*/

//console.log(myNumbers.filter(number => number % 2 === 0))


/* EXERCISE 5
Write the code to delete even entries from an array.
*/


//console.log(myNumbers.splice(number => number % 2 === 0))

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

let str = "this is a test string"
//let vwl = ["a", "e", "i", "o", "u"]
//const splitstr = str.split("")
//console.log(splitstr)

//splitstr.splice(str => [] in vwl)
//console.log(splitstr)
console.log(str)
console.log(str.replace(/[aeiou]/gi, ""))

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

console.log(myNumbers)
/*for (i = 0; i < myNumbers.length; i++) {
    myNumbers[i] = myNumbers[i] + 1
    
}
console.log(myNumbers)
*/
let myNumbers1 = myNumbers.map(x => x + 1)
console.log(myNumbers1)

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: [ "strive", "is", "good"] => [ 5 , 2, 4]
*/

const tst = ["this", "is", "test"]
/*for (i = 0; i < tst.length; i++) {
    
    console.log(tst[i].replace(/tst[i]/g, tst[i].length))
}
*/
const tst1 = tst.map(x => x.length)
console.log(tst1)


/* WHEN YOU ARE FINISHED
Send the code via Eduflow to the tutor! In the next days we'll also learn how to use GIT 
*/