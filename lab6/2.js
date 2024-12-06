const composeSafe = (...fns) => {
    let errors = []; 
    const resultFn = x => {
        try {
            return fns.reduceRight((v, fn) => fn(v), x);
        } catch (e) {
            errors.push(e);
            return undefined;
        }
    };
    resultFn.onError = callback => errors.forEach(callback);
    return resultFn;
};