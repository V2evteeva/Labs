const seq = (fn) => {
    let funcs = [fn];
  
    const chain = (x) => funcs.reduce((acc, fn) => fn(acc), x);
  
    const result = (x) => {
      if (typeof x === 'number') {
        return chain(x);
      } else {
        funcs.push(x);
        return result;
      }
    };
  
    return result;
  };
  
  console.log(seq(x => x + 7)(x => x * 2)(5));  
  console.log(seq(x => x * 2)(x => x + 7)(5));  
  