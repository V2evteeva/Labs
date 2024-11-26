function random(min, max = min) {
    if (max === min) {
        min = 0;
    }
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(random(5, 10)); 
