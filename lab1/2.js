const testObject = {
    n: 50
};

function inc(obj) {
    if (typeof obj === "object") {
        return ++obj.n;
    }
};

console.dir(inc(testObject));