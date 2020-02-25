function NonDecreasingSubsequence(array) {
    let result = `${array[0]} `;

    for (let i = 1; i < array.length; i++) {
        
        if (Number(array[i]) >= Number(array[i-1])) {
            result += `${array[i]} `;
        }
        
    }
    console.log(result);  
}
NonDecreasingSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);