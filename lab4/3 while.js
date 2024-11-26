function sum(...args) {
    let result = 0, i = 0;
    while (i < args.length) result += args[i++];
    return result;
}
