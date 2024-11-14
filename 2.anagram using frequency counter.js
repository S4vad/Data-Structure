function validAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.lenght!==str2.lenght){
        return false;    
    }
    
    const lookUp = {};

    for (const letter of str1) {
        lookUp[letter] ? lookUp[letter]++ : lookUp[letter] = 1;
    }
    for (const letter of str2) {
        if (! lookUp[letter]){
        return false;
        }else{
            lookUp[letter]-1
        }

    }

    return true;
}

validAnagram('anagram', 'nagram');
