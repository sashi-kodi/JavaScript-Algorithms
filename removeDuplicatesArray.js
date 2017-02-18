var array=[1,2,4,2,5,5];
var set = new Set();
array.forEach(function(item){
    set.add(item);
});
var newarray= Array.from(set);
console.log(newarray);