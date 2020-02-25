function Ladybugs(arr) {
    let fieldLength = Number(arr[0]);
    let bugsPosition = arr[1];
    bugsPosition = bugsPosition.split(' ');
    let field = [];
    for (let i = 0; i < fieldLength; i++) {
        field[i]=0;
        }
    for (let j = 0; j < bugsPosition.length; j++) {
        let k = Number(bugsPosition[j]);
            field[k] = 1;
        }

    //field = field.split(' ');

    for (let i = 2; i < arr.length-1; i++) {
       let actionArr = arr[i];
       actionArr = actionArr.split(' ');
        let flyLength = Number(actionArr[2]);
        let startPosition = Number(actionArr[0]);
       if (field[startPosition] == 1 ) {
           
        let direction = actionArr[1];
        switch (direction) {
            case 'right':
                if (field[flyLength+ startPosition] == 0) {
                    field[startPosition] = 0 ;
                    if (flyLength + startPosition <= fieldLength-1) {
                    field[flyLength + startPosition] = 1;
                    }
                }
                else if (field[flyLength+ startPosition] == 1) {
                    field[startPosition] = 0 ;
                    let m = 1;
                    while (true) {
                        if (flyLength + startPosition + m <= fieldLength-1 || flyLength + startPosition + m == 1 ) { 
                            m++;  
                        }else if (flyLength + startPosition + m > fieldLength-1) {
    
                        }
                        if (flyLength + startPosition + m  == 0 ){
                            field[flyLength + startPosition + m] = 1;
                            break;
                        }
                    }
                   // if (flyLength + startPosition + 1 <= fieldLength-1) {
                     //   field[flyLength + startPosition + 1] = 1;
                    //}
                }
                break;
            case 'left':
                if ((startPosition - flyLength) >= 0) {
                    
                    if (field[startPosition-flyLength] == 0) {
                        field[startPosition] = 0 ;
                        field[startPosition - flyLength] == 1;
                    }
                    else if (field[startPosition-flyLength] == 1) {
                        field[startPosition] = 0 ;
                        if (-flyLength + startPosition - 1 >= 0) {
                            field[flyLength + startPosition - 1] = 1;
                        }
                    }
                }  
                 break;
            default:
                break;
        }

       } 
    }
    field = field.join(' ');
    console.log(field);
    
}
//Ladybugs([ 3, '0 1','0 right 1','2 right 1' ]);
Ladybugs([ 3, '0 1 2','0 right 1','1 right 1','2 right 1']);
//Ladybugs([ 5, '3','3 left 2','1 left -2']);