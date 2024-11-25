function sum(...args) {
    let result = 0, i = 0;
    do {
        if (i >= args.length) break;
        result += args[i++];
    } while (true);
    return result;
}
