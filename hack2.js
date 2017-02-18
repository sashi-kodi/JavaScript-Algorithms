function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
    
    var wordsArray = sentence.split(' ');
    var palindromeList =[];
    wordsArray.forEach(function(word){
        if(isPalindrome(word)) {
            palindromeList.push(word);
        }
    });
    
    if(palindromeList.length>0){
        palindromeList.sort(sortAscendingByLength);
      return palindromeList[palindromeList.length-1];
    }
    else{
        return 'there is no palindrome';
    }
    
}

function reverseString(string) {
    
    return string.split('').reverse().join('');
    
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
    if(word=== reverseString(word)) return true;
    else return false;
    
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

function assertEquals(actual,expected,testname){
    if (actual=== expected) {
        console.log('passsed ::' + testname);
    }
    else{
        console.log('failed :: ' + testname);
    }
}

var test1="level mmaaddaamm";
var result1 ='mmaaddaamm';
assertEquals(findLongestPalindrome(test1), result1, "positive {test case 1} : two palindromes :: longest palindrome must be returned");

var test2="level sashi";
var result2 ='level';
assertEquals(findLongestPalindrome(test2), result2, "positive {test case 2} : one palindrome and one non-palindrome : palindrome must be returned");

var test3="sashi is good student";
var result3 ='there is no palindrome';
assertEquals(findLongestPalindrome(test3), result3, "negative {test case 3} : there is no palindrome");


