//program to calculate sum of all odd nos in an array
var array=[1,2,4,3,1,5];
var oddArr= array.filter(oddFN);
var sum = oddArr.reduce(function(total,item){
    return total+item;
},0);

console.log("sum of all odd nos in the input array is: "+ sum);

function oddFN(item){
    if(item%2===0) return false;
    else return true;
}