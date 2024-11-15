function bubble(arr){
    var noSwap;
    for (var i = arr.length; i>0 ; i--){
        noSwap=true;
        for (var j=0 ; j< i-1 ; j++){
          if (arr[j] > arr[j+1]){
            var temp =arr[j];
            arr[j] = arr[j+1] ;
            arr[j+1] = temp;
            noSwap=false;
          }       
        }
        if (noSwap) break;
    }
    return arr;
}

bubble([2, 3, 42, 1, 23, 54]); 