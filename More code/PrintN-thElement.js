function PrintNthElement(array) {
    let NthStep = Number(array[array.length-1]);
    let newArray = '';
    for (let i = 0; i < array.length-1; i+= NthStep) {
        newArray += `${array[i]} `; 
    }
    console.log(newArray);
}
//PrintNthElement(['5', '20', '31', '4', '20', '2']);
//PrintNthElement(['dsa', 'asd', 'test', 'test', '2']);
PrintNthElement(['1', '2', '3', '4', '5', '6']);
