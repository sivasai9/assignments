/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s=0;
  let e=str.length-1;
  while(s<e){
    if(str.charAt(s)!=str.charAt(e)){
      return false;
    }
    s++;
    e--;
  }
  return true;
}

let res=isPalindrome("ababa");
console.log(res);
