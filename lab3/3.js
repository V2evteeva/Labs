const ipToInt = (ip = '127.0.0.1') => {
    const NumArray = ip.split('.').map(Number);
  
    return NumArray.reduce((acc, item, index) => acc + (item << (3 - index) * 8), 0);
  };
  
  console.log(ipToInt('127.0.0.1'));  
  console.log(ipToInt('10.0.0.1'));  
  
  