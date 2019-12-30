/* Things to know: 
*  1: ceil(sqrt(num))
*  2: num += 2
*/

function nthPrime(n) {
  let
  primeArray = [2],
  numToCheck = 3,
  isPrime = true;

  while(primeArray.length < n){
    // 1
    let maxPrimeNum = Math.ceil(Math.sqrt(numToCheck));

    for(let i = 0; primeArray[i] <= maxPrimeNum; i++){
      if(numToCheck % primeArray[i] == 0){
        isPrime = false;
        break;
      }
    }

    if(isPrime) primeArray.push(numToCheck);
    // 2
    numToCheck += 2;
    isPrime = true;
  }

  return primeArray[primeArray.length-1];
}
