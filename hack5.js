// your code here!

// Don't just dive into coding! Make a plan.
function identifyAllLacedShoes(inventory){
  
  var nameWordsArray;
    var allLacedShoesOuput=[];
    var lacedShoeObj;
    var laceindex;
  inventory.forEach(function(item){
    item.shoes.forEach(function(shoe){
        lacedShoeObj={};
      laceindex = checkForLaceInShoeName(shoe);
       if(laceindex>0){
           nameWordsArray=shoe.name.split(" ");
           lacedShoeObj['nameWords']=nameWordsArray;
           lacedShoeObj["targetWordIndex"]= laceindex;
           allLacedShoesOuput.push(lacedShoeObj);
       }
    });
  });
    
    return allLacedShoesOuput;
  
}

function checkForLaceInShoeName(shoe){
    if(shoe.name.indexOf('lace')>0){
        var array = shoe.name.split(" ");  
        for(var i=0;array.length;i++){
            if(array[i].includes('lace')) break;
        }
        return i;
    }
    else return -1;
  
  
}
var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

renderOutput(identifyAllLacedShoes(inventory));

function renderOutput(lacedShoes){
    
    if(lacedShoes.length>0){
        console.log('[');
        
        for(var i=0;i<lacedShoes.length;i++){
            console.log('{');
            
            renderOutputForEachLacedShoe(lacedShoes[i]);
            
            if(i!==lacedShoes.length-1)
            console.log('},');
            else console.log('}');
        }
        console.log(']');
    }
    
}

function renderOutputForEachLacedShoe(lacedShoe){
    console.log('"nameWords": [');
    for(var i=0;i<lacedShoe.nameWords.length;i++){
        if(i=== lacedShoe.nameWords.length-1) console.log('"'+lacedShoe.nameWords[i]+'"');
        else console.log('"'+lacedShoe.nameWords[i]+'",');
    }
    console.log('],');
    console.log('"targetWordIndex":'+lacedShoe.targetWordIndex);
}