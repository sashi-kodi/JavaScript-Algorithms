// your code here...

// what's a good main function name to choose?

// what does your outline look like?  don't just dive into coding and make a mess! :)

function calculateAverageShoePricePerDesigner(shoes){
  var avg=0;
  var totalPrice= shoes.reduce(function(total,item){
    return total+item.price;
  },0);
  
  avg=totalPrice/shoes.length;
  return avg;
}

function buildDesignersAveragePriceInventory(inventory){
  var designersAvgPriceOuput={};
  var designers=[];
  var designerAvgPriceObj;

    
    inventory.forEach(function(item){
        designerAvgPriceObj={};
        designerAvgPriceObj.name = item.name;
        designerAvgPriceObj.averagePrice = calculateAverageShoePricePerDesigner(item.shoes);
        designers.push( designerAvgPriceObj);
    });
    
  designersAvgPriceOuput['designers'] = designers;
  return designersAvgPriceOuput;
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
console.log(buildDesignersAveragePriceInventory(inventory));