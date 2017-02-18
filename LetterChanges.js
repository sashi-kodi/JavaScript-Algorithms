//Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

function LetterChanges(str){
    var code;
    var newstr="";
    var vowels=['a','e','i','o','u'];
    for(var i=0;i<str.length;i++){
        if(vowels.indexOf(str[i])!== -1){
            newstr+= str[i].toUpperCase();
        }
        else{
            if((str[i]==='z' )||(str[i]==='Z') ){
                newstr+='a';
            }
            else{
                code = str.charCodeAt(i);
               code++;
               newstr+= String.fromCharCode(code);
            }
           
        }
    }
    
    return newstr;
}

console.log(LetterChanges("aeioubC"));