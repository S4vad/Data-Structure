function insertionSort(arr) {
    for (var i=0 ; i < arr.length; i++){
        var currentVal = arr[i];
        for (var j=i-1 ; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
            console.log(arr)
        }
        arr[j+1] = currentVal ;   
    }
    return arr;
    
}

insertionSort([2,1,4,9,35,0])