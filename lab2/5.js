function rangeOdd(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        if ((i & 1) === 1) { 
            result.push(i);
        }
    }
    return result;
}

const oddNumbers = rangeOdd(15, 30);
console.log(oddNumbers);
