//disemvowel
//
//Write a function disemvowel(string), which takes in a string, and returns that string with all the vowels removed. 

function removeVowel(str){
    var vowels=['a','e','i','o','u'];
    var newstr="";
    for(i=0;i<str.length;i++){
        if(vowels.indexOf(str[i])===-1){
            newstr+=str[i];
        }
    }
    return newstr;
}

console.log(removeVowel("aeiou"));