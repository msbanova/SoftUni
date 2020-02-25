function MagicSum(array, num) {
    let currentSum = 0;
    

    for (let i = 0; i < array.length; i++) {
       for (let j = i+1; j < array.length; j++) {
           
        currentSum = array[i] + array[j];
        if (currentSum == num) {
            console.log(`${array[i]} ${array[j]}`);
            currentSum = 0;
            
        }
           
       }
        
    }
}
MagicSum([1, 7, 6, 2, 19, 23], 8);
MagicSum([14, 20, 60, 13, 7, 19, 8],27);
MagicSum([1, 2, 3, 4, 5, 6],6);