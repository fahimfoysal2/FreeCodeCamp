// --------- Solution that is not accepted ----------
var arr = [];

function myRangeOfNumbers(startNum, endNum) {
  startNum === endNum 
    ? arr.push(startNum) 
    : (arr.push(startNum), rangeOfNumbers(startNum+1,endNum)) ;
  return arr;
};

// ---------- Accepted Solution -----------
function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNumbers(1,5));
console.log(myRangeOfNumbers(1,5)); 