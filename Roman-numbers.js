var romanToInt = function (s) {
  let sum = 0;

  s = s.toUpperCase().split('');
  console.log(s);
  for (const iterator of s) {
    switch (iterator) {
      case 'I':
        sum = sum + 1;
        break;
      case 'V':
        sum = sum + 5;
        break;
      case 'X':
        sum = sum + 10;
        break;
      case 'L':
        sum = sum + 50;
        break;
      case 'C':
        sum = sum + 100;
        break;
      case 'D':
        sum = sum + 500;
        break;
      case 'm':
        sum = sum + 1000;
        break;

      default:
        break;
    }
  }
  console.log(sum) ;
};

romanToInt("XXVII");
