//(1) Create an array of numbers and save the array to a variable
//(2) Iterate through the array using a loop
//(3) Create a function that will multiply each number in the array by two
//(4) Pass each number in the array to this function
//(5) Save the original numbers and the doubled results as key-value pairs in an object

function double(n){
    return n*2;
}
var array=[1,2,3,4];
var key;
var doubleObj={};
array.forEach(function(item){
    key =item.toString();
    doubleObj[key] = double(item);
});

console.log(doubleObj);