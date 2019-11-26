function sumAll(arr) {
  var sum = 0,
    low = arr[0],
    high = arr[1];
  // arrange low, high
  if(low > high){
    high = arr[0];
    low = arr[1];
  }

for(low;low<=high; low++){
  sum +=low; 
}

  return sum;
}

sumAll([1, 4]);
