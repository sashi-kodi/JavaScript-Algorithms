var array=[20,10,2,3,4,12,15,8,1];
function bubbleSort(array){
    var len=array.length;
    var stop;
    for(var i=0;i<array.length;i++){
        
        for(var j=0,stop=len-i;j<stop;j++){
            if(array[j]>array[j+1]){
                swap(array,j,j+1);
            }
        }
        
    }
}

function swap(array,index1,index2){
    var temp;
    temp=array[index1];
    array[index1]=array[index2];
    array[index2]=temp;
}

console.log(array);
bubbleSort(array);
console.log("array after bubble sort is : " + array);
