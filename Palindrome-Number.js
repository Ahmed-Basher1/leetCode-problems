var isPalindrome = function (x) {
  let reversed = x.toString().split(',').reverse().join();
  x = Math.abs(x);
  console.log(x.toString() === reversed);
  console.log(x);
  return x.toString() === reversed;
};
isPalindrome(-121);
