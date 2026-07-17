function countWords(words){
    const result={} // empty object
    for(let i=0; i< words.length; i++){
        const word= words[i];
        if(result[word] === undefined){
            result[word] = 1; // initially the value of the property is undefied so we are keeping a count of 1 for the word which appears first
        }else
        {
            result[word]++;
        }
    }
    return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple', 'mango']))