const mas = ['text', 0, true, 'Name', 100, 'string', undefined, 8, { a: 'teset' }, false, -55, false, false, 'somthing', 44, 'false', NaN, true, Infinity, { vale: 20 }];

function calculateTypes (value) {
    const result = {};
    for (const element of value) {
        const type = typeof element;

        if (result [type]) {
            result [type] += 1;
        } else {
            result [type] = 1;
        }
    }
 return result;
}

console.dir(calculateTypes(mas));