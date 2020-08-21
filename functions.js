// function declaration creates a Function Object
// By default function return the value undefined

function factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
}

const math = {
  factorial: function factorial(n) {
    if (n > 1) {
      return n * factorial(n - 1);
    }

    return 1;
  },
};

const fib = function fibonnaci(n) {
  if (n > 2) {
    return fibonnaci(n - 1) + fibonnaci(n - 2);
  } else if (n < 1) {
    return 0;
  }
  return 1;
};

console.log(math.factorial(100));
console.log(fib(10));
