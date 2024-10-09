// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    return this.data.length;
  }
  printNumbers() {
    //print the numbers in data
    this.data.forEach((number, idx) => console.log(idx, number)); // prints individually
  }
  odds() {
    //return the odd numbers in data
    return this.data.filter((number) => number % 2 !== 0);
  }
  evens() {
    //return the even numbers in data
    return this.data.filter((number) => number % 2 === 0);
  }
  sum() {
    //return the sum of the numbers
    return this.data.reduce((accumulator, number) => accumulator + number, 0);
    let accumulator = 0;

    for (let i=0; i < this.data.length; i++){
      accumulator = accumulator + this.data[i];
    } 
    return accumulator;
  }
  product() {
    //return the product of the numbers
    return this.data.reduce((accumulator, number) => accumulator * number, 1); // initial value set to 1 for product!!
  }
  greaterThan(target) {
    //return the numbers greater than the target
    return this.data.filter((number) => number > target);
  }
  howMany(target) {
    //return the count of a given number
    return this.data.filter((number) => number === target).length;
  }
}
// ---------------------I was having fun here----------------------------
let defaultString = "";
let randNum1 = Math.floor(Math.random() * 10) + 1; // creates random number 1-10
let randNum2 = Math.floor(Math.random() * 10); //creates random number 0-9

for (let i = 0; i < randNum1; i++) {
  defaultString+= (Math.floor(Math.random() * 10)) + ",";
}
defaultString+= Math.floor(Math.random() * 10);
//-----------------------------------------------------------------------
//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", defaultString);

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log("the following values use " + randNum1 + " as a target.") // added for clarification------------
console.log(n1.greaterThan(randNum1)); //returns numbers greater than another number
console.log(n1.howMany(randNum1)); //return the count of a specific number
