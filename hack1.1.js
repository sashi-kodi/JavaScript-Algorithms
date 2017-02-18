function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  // Count the instances of each letter
  // Iterate all the counts and find the highest
  // Return this word's max repeat count
    if(!word) return 0;
    else{
       var charArr= word.split('');
        var countArray =[];

        charArr.forEach(function(char){
            updateCountArray(countArray,char);
        });

        countArray.sort(sortByCounts);
        var maxcount = countArray[0]['count'];
        return maxcount; 
    }
    
}
function sortByCounts(a,b){
    return b.count-a.count;
}
function updateCountArray(countArray,ch){
    var found=false;
    for(var i=0;i<countArray.length;i++){
        if(countArray[i].char===ch) {
        found =true;
            break;
        }
    }
    
    if(found){
        countArray[i].count++;
    }
    else{
        countArray.push({char:ch,count:1});
    }
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  // For each word...
    
    var wordsArray = text.split(" ");
    
     
    wordsArray.forEach(function(word){
        var repeatCountForWord = findMaxRepeatCountInWord(word);
        //  If that max repeat count is higher than the overall max repeat count, then
      //    update maxRepeatCountOverall
      //    update wordWithMaxRepeatCount
        if (repeatCountForWord>maxRepeatCountOverall ){
            maxRepeatCountOverall = repeatCountForWord;
            wordWithMaxRepeatCount = word;
        }
    });
 
  return wordWithMaxRepeatCount;
}


function assertEquals(actual,expected,testname){
    if (actual=== expected) {
        console.log('passsed ::' + testname);
    }
    else{
        console.log('failed :: ' + testname);
    }
}

var test1="Saaaashi is a good student";
var result1 ='Saaaashi';
assertEquals(findFirstWordWithMostRepeatedChars(test1), result1, "positive {test case 1}");

var test2='';
var result2='';
assertEquals(findFirstWordWithMostRepeatedChars(test2), result2, "empty string {test case 2} - must return empty string");

var test3="sashi is a good student";
var result3='sashi';
assertEquals(findFirstWordWithMostRepeatedChars(test3), result3, "2 words having similar repeat count {test case 3} - must return first word");
