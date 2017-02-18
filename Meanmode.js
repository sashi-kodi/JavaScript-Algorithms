var array=[5,3,3,3,1];
function calculateMean(array){
    var sum=array.reduce(function(total,item){
   return total+item; 
},0);
console.log(sum);
var mean= sum/array.length;

    return mean;
}

var mean=calculateMean(array);
var mode = calculateMode(array);
console.log("mean is "+ mean);
console.log("mode is "+ mode);

function calculateMode(array){
    var countsObj={};
    array.forEach(function(item){
        if(item in countsObj){
            countsObj[item] +=1;
        }
        else{
            countsObj[item] =1;
        }
    });
    var highcount=0;
    var mode=0;
    for(key in countsObj){
       if(countsObj[key]>highcount){
           highcount = countsObj[key];
           mode = key;
       } 
        
    }
    
    return mode;
}