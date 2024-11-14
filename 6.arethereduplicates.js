function  duplicate(arr) {
    var dupli = {};
    for (var num of arr){
        dupli[num]=(dupli[num] || 0) +1
    }

    for (let key in dupli){
        if (dupli[key]>1){
        return false
        }
        
    }

    return true;
}

duplicate([1,2,3,4,4])