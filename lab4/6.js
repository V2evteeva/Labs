const max = (matrix) => {
    let array = matrix.flat(1);  
    let answer = array[0];
    for (const i of array) {
        if (answer < i) answer = i;
    }
    return answer;
}

const matrix = [[15, 23, 8], [42, 7, 18], [30, 12, 5]];
console.log(max(matrix));  
