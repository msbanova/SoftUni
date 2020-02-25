function MaxNumber(array) {
    let arrayOfMax = '';
    let n = array.length;
    while (true) {
    if (n == 1) {
        arrayOfMax += `${array[array.length]}`
        break;
    }    
    
    for (let i = 0; i < n; i++) {
    
       let j = i+1;
            while (true) {
                if (array[i] <= array[j]) {
                    maxElement ='';
                    break;
                }
                maxElement = array[i];
                j++;
                if (j > n ) {
                    break;
                }
            }
            arrayOfMax += `${maxElement} `;
        } 
        console.log(arrayOfMax);
        break;
    }  
}
MaxNumber([1, 4, 3, 2]);
MaxNumber([14, 24, 3, 19, 15, 17]);
MaxNumber([41, 41, 34, 20]);
MaxNumber([27, 19, 42, 2, 13, 45, 48])
