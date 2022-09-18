// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// a) Create a test with an expect statement using the variable provided.


describe("objectifier", () =>{
  it("takes in an array of objects, utilizes, .map to find the strings associated with the name, splits the string in 2 parts, capitalizes the first letter of each, rejoins them and returns an array with a sentence about each person with thier name capitalized and thier occupation", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
      expect(objectifier(people)).toEqual([
        "Ford Prefect is a hitchhiker.",
        "Zaphod Beeblebrox is president of the galaxy.",
        "Arthur Dent is a radio employee."
      ])
  });
});


// good fail
  // Test Suites: 1 failed, 1 total
  // Tests:       1 failed, 1 total
// good pass
  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total
  
  // I do not like how it looks, so i am going to try and mess with it since i already know it passed, i want to see if i can have it check each index
  
  // describe("objectifier", () =>{
  //   it("takes in an array of objects, utilizes, .map to find the strings associated with the name, splits the string in 2 parts, capitalizes the first letter of each, rejoins them and returns an array with a sentence about each person with thier name capitalized", () => {
  //       expect(objectifier(people[1])).toEqual(["Ford Prefect is a hitchhiker."])
  //       expect(objectifier(people[2])).toEqual(["Zaphod Beeblebrox is president of the galaxy."])
  //       expect(objectifier(people[3])).toEqual(["Arthur Dent is a radio employee."])
  //   });
  // });
  // bad fail
  // Test Suites: 1 failed, 1 total
  // Tests:       1 failed, 1 total
  // that totally does not work, im an idiot. I was running a function that didnt take in an array anymore, it was taking in the value at the index of that array. hmmmm, how can i make my test more effecient. I will have to play with google to find a way of testing certain parts of this.

// b) Create the function that makes the test pass.
const objectifier = (input) =>{
  // use the higher order function .map to iterate through the object checking the key value pairs and returning the values that have the key of "name" in an array
  return input.map(input => 
      input.name
      // use .split to change the strings containing 2 words in one string at each index of the array to 2 strings in each in
      .split(" ")
      // use the higher order function .map to iterate through the seperatedNames and use charAt(0) & .toUppercase() to capitalize the first letter, and then use the + symblol to add it to the second half of the string which is attained by using .slice(1) which is used because it takes all the letters after the 0 index.  
      .map(seperatedNames => seperatedNames.charAt(0).toUpperCase() + seperatedNames.slice(1)) 
      // lastly use .join(" ") to put the words back to gether and then + them to the string ` is ${input.occupation}.` i used back ticks to add in the occupation part of the hash.
      .join(" ") + ` is ${input.occupation}.`
  )}
  // console.log(objectifier(people))
// // --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// // a) Create a test with an expect statement using the variables provided.
describe("mixedFixer", () => {
  it("takes in an array with the possibility of multiple datatypes, filters to find only numbers, then utilizes %3 to find the remaiders and returns the remainders", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    expect(mixedFixer(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(mixedFixer(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// good fail, utlized fdescribe to focus my test
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 skipped, 2 total
// good pass, utilized fdescribe to focus my test
    // Test Suites: 1 passed, 1 total
    // Tests:       1 skipped, 1 passed, 2 total

// b) Create the function that makes the test pass.
// psuedocode: declare a function "mixedFixer" that takes in an array "arr"
let mixedFixer =(arr)=>{
  // create a variable that utilizes the higher order function .filter to iterate through arr checking
  let remain = (arr).filter((number) =>{
    // if the condition set (typeof number === "number") returns a new array (remain)
      return typeof number === "number"  
  })
  // create a variable "thirds" to store the result of the higher order function .map 
  // use .map to iterate over the array "remain" and utilizes % 
  // to divide each number by 3 returning the remainder
  return thirds = remain.map(x => x % 3)
}

// // --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
// // a) Create a test with an expect statement using the variables provided.

fdescribe("tripped", () => {
  it("takes in an array of numbers, creates an emplty variable, sum=0, cubes each number in the array and adds it to the sum utilizing +=, returns the value of sum", () => {
    const cubeAndSum1 = [2, 3, 4]
    expect(tripped(cubeAndSum1)).toEqual(99)
    const cubeAndSum2 = [0, 5, 10]
    expect(tripped(cubeAndSum2)).toEqual(1125)
  })
})

// good fail, utlized fdescribe to focus my test
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 2 skipped, 3 total
// good pass, utilized fdescribe to focus my test
    // Test Suites: 1 passed, 1 total
    // Tests:       2 skipped, 1 passed, 3 total


// const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// // Expected output: 1125

// b) Create the function that makes the test pass.
  // Create a function called tripped that takes in an array
const tripped= (arr) =>{
  // create a variable sum equal to 0 to store the values after they are cubed
    let sum = 0
    // utilize a for loop using the values of the arrray
    for(const value of arr){
      // cube the each value and store it in the variable sum adding it to what sum was equal to before were just about to add it 
        sum += value**3
        // return sum
} return sum
}