//This is a common interview question where you need to write a program to find all duplicates in an array. The elements in the array have no restrictions, but in this algorithm we'll work specifically with integers. Finding duplicates in an array can be solved in linear time by using a hash table to store each element as we pass through the array. 

function findDuplicates(array){
    var dups=[];
    var hashobj={};
    for(var i=0;i<array.length;i++){
        if (array[i] in hashobj){
            hashobj[array[i]] +=1;
            
        }
        else{
            hashobj[array[i]] =1;
        }
    }
    
    for(var key in hashobj){
        if (hashobj[key] >1){
            dups.push(key);
        }
    }
            return dups;
}

console.log(findDuplicates([1,2,3,2,1,4]));