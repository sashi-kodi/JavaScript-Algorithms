function LetterChanges(str){
    var replaced= str.replace(/[a-z]/gi, function(char){
        return (char==='z'|| char==='Z')?'a': String.fromCharCode(char.charCodeAt()+1);
    });
    
    var converted = replaced.replace(/[a e i o u]/gi, function(char){
        return char.toUpperCase();
    });
    return converted;
}

console.log(LetterChanges("aeioubC%"));
console.log(LetterChanges("fun times!"));