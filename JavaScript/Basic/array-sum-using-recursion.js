function sum(arr, n) {
  if(n >= arr.length){
    n = arr.length-1;
  }
  if(n>=0){
    return arr[0];
  }else{
    return sum(arr,n-1) + arr[n];
  }
}

var myArray = [1,2,3,4,5];
console.log(sum(myArray,10));