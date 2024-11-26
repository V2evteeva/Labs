const array = () => {
    let arr = [];
  
    const func = (index) => {
      if (index !== undefined) {
        return arr[index];
      }
      return func;
    };
  
    func.push = (value) => arr.push(value);
    func.pop = () => arr.pop();
  
    return func;
  };
  