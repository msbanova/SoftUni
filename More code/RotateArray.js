function RotateArray(arr) {
    let num = Number(arr[arr.length-1]);
    let result = '';
    if (typeof num != "number") {
        //console.log('Empty'); 
    }
    else {
        if (num > arr.length-1) {
         num = num %= (arr.length-1);
     }
     while (num > 0) {
        let letztEl = arr[arr.length-2];

        for (let i = arr.length-2; i > 0; i--) {
        arr[i] = arr[i-1];
    }
        arr[0] = letztEl;

        num--;
     }
    for (let i = 0; i < arr.length - 1; i++) {
        result += `${arr[i]} `;
    }
}
    if (result.length > 0 ) {
        console.log(result);
    }else {
        console.log('Empty');
    }
   
}
//RotateArray(['remove', 'remove', 'remove']);
//RotateArray(['1', '2', '3', '4', '2']);
RotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])