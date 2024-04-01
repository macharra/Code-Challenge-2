function range(start, end) {
    let array = [];
    let increment; 

    //define the increment
    if (increment <= start){
        increment = 1;
    } else {
        increment = -1
    }

    // Generate the array using a loop
    for (let i = start; start <= end ? i <= end : i >= end; i += increment) {
        array.push(i);
    }

    return array;
}

