var numbers = [5, 3, 8, 6, 9, 1, 0, 2, 2];
var total={odd:0,even:0};
var oddEvenCounts = numbers.reduce(function(total,item){
if(isOdd(item)) total.odd++;
else total.even++;
},total);

console.log(oddEvenCounts.odd);
console.log(oddEvenCounts.even);

function isOdd(a){
if(a %2 === 0) return false;
else return true;
}