var array=[20,10,2,3,4,12,15,8,1];
function selectionSort(array){
    var min;
   for(var i=0;i<array.length;i++){
       min=i;
       
       for(var j=i+1;j<array.length;j++){
           if(array[j]<array[min]){
               min=j;
           }
       }
       
       if(i===min) continue;
       else{
           swap(array,i,min);
       }
   } 
}

function swap(array,index1,index2){
    var temp=array[index1];
    array[index1]=array[index2];
    array[index2]=temp;
}

console.log(array);
selectionSort(array);
console.log("array after selection sort is : " + array);
