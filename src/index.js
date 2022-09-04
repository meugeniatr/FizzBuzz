const n = 5;
const arr = [1, 2, 3, 4, 5, 6, 9, 15];

const moduloZero = (n, divider) => {
  return n % divider === 0;
};

const fizzFuzzN = (n) => {
  if (moduloZero(n, 3) && moduloZero(n, 5)) return "FizzBuzz";
  if (moduloZero(n, 3)) return "Fizz";
  if (moduloZero(n, 5)) return "Buzz";
  return n;
};

const fizzFuzz = (el) => {
  if (Array.isArray(el)) {
    return el.map((n) => {
      return fizzFuzzN(n);
    });
  } else {
    return fizzFuzzN(n);
  }
};

console.log(fizzFuzz(n));
console.log(fizzFuzz(arr));
