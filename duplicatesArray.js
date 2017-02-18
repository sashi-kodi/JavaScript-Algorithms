//program to find all duplicates in an array
var array=[1,22,3,4,4,22];
console.log(findDuplicates(array));
function findDuplicates(array){
var countsObj={};
array.forEach(function(item){
    
if(item in countsObj){
    countsObj[item]+=1;
}
    else{
        countsObj[item]=1;
    }

});
    
    var duplicates=[];
    for(key in countsObj){
        if(countsObj[key]>1) duplicates.push(key);
    }
    
    return duplicates;
}