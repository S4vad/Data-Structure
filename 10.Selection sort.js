function selectionSort(arr) {
    for (i=0 ; i<arr.length ; i++){
        var lowest = i;
        for (var j= i+1; j<arr.length ; j++){
            if (arr[j] < arr[lowest]){
                lowest =j ;
            }
        }
        console.log(arr)
        console.log("swapping to ;")
        var temp= arr[i];
        arr[i] =arr[lowest] ;
        arr[lowest] = temp;
        console.log(arr) ;
        console.log("****************")
    }
    return arr;
    
}

selectionSort([2,3,1,44,5,23,33])