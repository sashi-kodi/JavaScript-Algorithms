//The challenge is to find all the pairs of two integers in an unsorted array that sum up to a given S. For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.

function TwoSum(array,total){
    
    var newarray=[];
    for(var i=0;i<array.length;i++){
        for(var j=i+1;j<array.length;j++){
            if (array[i] + array[j] === total){
                newarray.push([array[i], array[j]]);
            }
        }
    }
    return newarray;
    
}
var array=[3, 5, 2, -4, 8, 11];
var newarray=TwoSum(array,7);
console.log(newarray);