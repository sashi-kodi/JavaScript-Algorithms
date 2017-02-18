var str1='hello';
var str2='world';
transposeStrings(str1,str2);

function transposeStrings(str1,str2){
    var stringObject ={};
    stringObject.first= str1;
    stringObject.second = str2;
    compareAndPadStrings(stringObject);
    for(var i=0;i<stringObject.first.length;i++){
        console.log(stringObject.first[i]+" " +stringObject.second[i]);
    }
    
}

function compareAndPadStrings(obj){
    if(obj.first.length>obj.second.length) {
        //first is long, so pad second
        for(var i=obj.second.length;i<obj.first.length;i++)
            obj.second+= " ";
    }
    else{
        //second is long and pad first string
        for(var i=obj.first.length;i<obj.second.length;i++)
            obj.first+= " ";
    }
}