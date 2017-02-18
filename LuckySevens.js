var array=[2,1,3,0,2,6,1];
function luckySevens(array){
    
    for(var i=2;i<array.length;i++){
        if(array[i]+array[i-1]+array[i-2]===7) {
            return true;
        }
    }
    
    return false;
}

console.log(luckySevens(array));