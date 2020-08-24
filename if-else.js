// Equality ==
// If both operands are primitive types
// like 1 == 1 JS it will compare their values

// if both operands are objects, then JS
// compares their internal references (same object in memory)

console.log(1 == 1);
console.log(1 == '1');
console.log('1' == 1);
console.log(0 == false);
console.log(0 == null);
console.log(0 == undefined);
console.log(null == undefined);

// Inequality !=
console.log(1 != 1);
console.log(1 != '1');
console.log('1' != 1);
console.log(0 != false);
console.log(0 != null);
console.log(0 != undefined);
console.log(null != undefined);

// Identiy  or Strict Equality ===
// Return true based on two conditions
// The operands are strictly equal
// The operands are of the same type

let a = 1;
let b = 1;
console.log(a === b); // returns true

// Strict Inequality applies the same rule of Strict Equality

// Relational Operators
// Greater Than >
// Greater Than or Equal >=
// Less Than <
// Less Than or Equal <=

console.log(5 > 5);
console.log(5 >= 5);
console.log(7 < 6);
console.log(4 <= 6);

// Logical Operators
// AND &&
// OR ||
// NOT !
console.log(5 < 7 && 4 < 4);
console.log(5 < 7 && 4 >= 4);
console.log(5 < 7 || 4 < 4);
console.log(5 >= 7 || 4 > 4);
console.log(!(2 ** 3));

// Falsy Values
// The following six values are known as Falsy values,
// meaning they evaluate to false:

// false
// undefined
// null
// 0
// NaN
// "" (i.e., the empty string)

// Ternary
// condition ? trueStatement : falseStatement

function getGrade(score) {
  let grade;

  if (score < 0) {
    return score;
  } else {
    if (score > 25 && score <= 30) grade = 'A';
    else if (score > 20 && score <= 25) grade = 'B';
    else if (score > 15 && score <= 20) grade = 'C';
    else if (score > 10 && score <= 15) grade = 'D';
    else if (score > 5 && score <= 15) grade = 'E';
    else grade = 'F';
  }

  return grade;
}
