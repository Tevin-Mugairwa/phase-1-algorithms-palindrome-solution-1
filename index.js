function isPalindrome(word) {
  // Write your algorithm here
  if (word.length<2) return true
  let start =0
  let end = word.length - 1
  while(start<=end)
  {
    if (word[start]!=word[end])
    {
      return false
    }
    start ++
    end--
  }
  return true

}

/* 
  Add your pseudocode here
  loop through the string
  check last element if is not equal to the first element
  if the elements dont match return false
  else return true
  increment start and decrement end.
*/

/*
  Add written explanation of your solution here
Palindrome is a word that is pronunced the same in both ways.Here i
created a function that allows a user to input a word. It start by checking if the length 
of the word is less than 2. A single letter word and an empty string are also palindromes.
It therefore return true if the word has a length of lesss than 2. It loops  through the string once if the length 
is greater or equal to 2. This happens in O(n) time and I do not require any extra space
to run the function.The function return false when the last element does not match the first element*/

// You can run `node index.js` to view these console logs
if (require.main === module) {

  // add your own custom tests in here
  console.log('Expecting: false')
  console.log('=>', isPalindrome('boy'));


  console.log('Expecting: true')
  console.log('=>', isPalindrome('abba'));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
