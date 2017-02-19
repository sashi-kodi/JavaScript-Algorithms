var array1=[5,6,8,2,0,7];
var array2=[10,3,1,4,9];
function mergeSort(array1,array2){
    var sortedArray=[];
    
    var i=0; var j=0;
    while(i<array1.length && j<array2.length){
        if(array1[i]<array2[j]){
            sortedArray.push(array1[i]);
            i++;
        }
        else if(array1[i]===array2[j]){
            sortedArray.push(array1[i]);
            i++;
            j++;
        }
        else{
            sortedArray.push(array2[j]);
            j++;
        }
    }//end of while
    
    while(i<array1.length){
        sortedArray.push(array1[i]);
        i++;
    }
    
     while(j<array2.length){
        sortedArray.push(array2[j]);
        j++;
    }
    
    
    
    
    return sortedArray;
}
function selectionSort(array){
    var min;
    for(var i=0;i<array.length;i++){
        min=i;
        for(var j=i+1;j<array.length;j++){
            if(array[j]<array[min]){
                min=j;
            }
        }
        
        if(min!== i){
            swap(array,i,min);
        }
    }
}
function insertionSort(array){
    var cur;
    for(var i=0;i<array.length;i++){
        cur=array[i];
        for(var j=i-1;j>=0&&cur<array[j];j-- ){
            array[j+1]=array[j];
        }
        array[j+1]=cur;
    }
}
function swap(array,index1,index2){
var temp;
    temp=array[index1];
    array[index1]=array[index2];
    array[index2]=temp;
}
          
            selectionSort(array1);
          insertionSort(array2);
          console.log("array 1 is " + array1);
          console.log("array 2 is  " + array2);
         var newarray= mergeSort(array1,array2);
console.log("merge sorted array is : "+ newarray);
