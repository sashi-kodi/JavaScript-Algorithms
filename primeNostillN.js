//The sieve of Eratosthenes algorithm generates all the primes up to a given limit. This is a common and fast algorithm used to generate a list of primes up to a given limit. It works by making a list from 1 to N, and then iterating through the list and progressively removing non-prime, composite numbers until only primes are left in a list.

function generatePrimes(n){
    var bools=[];
    //initialize bools array with all true
    for(var i=0;i<n;i++){
        bools[i]=true;
    }
    
    var primes=[];
    
    bools[0] = false; //since 1 is not a prime no
    for(var i=2;i<=n;i++){
        if(bools[i-1]===true){
            for(var j=i*2;j<=n;j+=i){
                bools[j-1]=false;
            }
        }
    }
    
    for(var i=0;i<n;i++){
        if(bools[i]) {
            primes.push(i+1);
        }
    }
    
    return primes;
}

console.log(generatePrimes(21));