function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result[result.length] = i;
    }
    return result;
}

const numbers = range(15, 30);
console.log(numbers);
