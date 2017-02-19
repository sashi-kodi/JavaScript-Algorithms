var array=[20,10,2,3,4,12,15,8,1];
function insertionSort(array){
    for(var i=0;i<array.length;i++){
        temp=array[i];
        for(var j=i-1;j>=0 && array[j]>temp;j--){
            array[j+1]=array[j];
        }
        array[j+1]=temp;
    }
}

console.log(array);
insertionSort(array);
console.log("array after insertion sort is : " + array);
