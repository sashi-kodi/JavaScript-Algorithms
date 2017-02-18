//This challenge requires you to determine if every alphabetic character in a string has a plus (+) symbol on the left and right side of itself. For example: the string "+a+b+c+" is good but the string "===+3+f=+b+" is not because the "f" does not have a plus symbol to its right. A very simple way to solve this challenge is to create a loop that every time it gets to an alphabetic character, it checks to see if it is surrounded by + symbols.
//

function SimpleSymbols(str){
    str = '='+str+'=';
    var validflag=true;
    for(var i=0;i<str.length;i++){
        if(str[i].match(/[a-z]/i)!=null){
            if(str[i-1]==='+'&& str[i+1] === '+') continue
            else{
                validflag=false;
                break;
            }
        }
    }
    
    return validflag;
}

console.log(SimpleSymbols("+d+=3=+s+"));      
console.log(SimpleSymbols("+d+=3=+s"));    
console.log(SimpleSymbols("d+=3=+s+"));      