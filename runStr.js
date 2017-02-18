function RunLength(str) { 

var newstr="";
var cur, prev; var count;
    
for(var i=0;i<str.length;i++){
    cur= str[i];
   if(cur!== prev){
       if(i!==0) newstr+= count+prev;
     count=1;  
     prev=cur;
   }
   else{
      count++; 
       prev=cur;
   }
}//end of for loop

newstr+=count + prev;
    return newstr;
}

console.log(RunLength("aabbcde"));
console.log(RunLength("wwwbbbw"));
