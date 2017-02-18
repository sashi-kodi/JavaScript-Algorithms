function countSteps(n){
if (n===1) return 1;
if (n===2) return 2;
return countSteps(n-1) + countSteps(n-2);
}

console.log(countSteps(5));