function bubbleSort(array) {
  var swap;
  for(var i=0; i< array.length-1; i++){
    swap = false;
    for(var j=0; j< array.length-i-1; j++){
      if(array[j]>array[j+1]){
        var temp =  array[j];
        array[j] = array[j+1];
        array[j+1] = temp; 
        swap=true;
      }
    }
    if(!swap){
        break;
    }
  }
  return array;
}

var arr = bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

console.log(arr);