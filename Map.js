var bdays=['08-19', '11-19', '02-28'];
var bdays2=bdays.map(function(element){
    return element.replace('-','/');
});
console.log(bdays2);