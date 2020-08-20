// Data Types are Immutable and Objects

// Number
// String
// Boolean
// Symbol
// Null
// Undefined

// Symbolic Numbers
// Infinity, -Infinity and NaN

// isSafeInteger Method
// Return true or false based on IEEE-754

// Number.MAX_SAFE_INTEGER and MIN_SAFE_INTEGER
// return a max and min constant of a safe int

// String
// Immutable
let myString = 'Augusto';
let mySubString = myString.substr();
let myConcat = myString.concat(mySubString);

// Boolean
// Logical entity true or false

// Symbol Data Type
// Unique and Immutable primitive value

// Null Data Type
// only one value: null

// typeOf operator
// determine the type associated with a variable

// Naming
// Valid variable Names
var _daysCount;
var MinimumCost;
var page10;
var Total_elements;

// Coercion
// number + string - number is coerced to a string
// boolean + string - boolean is coerced to a string
// number + boolean - boolean is coerced to a number

function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;

  const firstDecimal = 4.0;

  const firstString = 'HackerRank ';

  console.log(firstInteger + parseInt(secondInteger));

  console.log(firstDecimal + parseFloat(secondDecimal));

  console.log(firstString + secondString);
}
