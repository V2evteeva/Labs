function fn() {

    const obj1 = { name: "Veronika" };

    let obj2 = { name: "Olga" };

   obj1.name = "Nika";
    obj2.name = "Olya";

    // obj1 = { name: "Kiril" }; // Помилка: не можна змінювати посилання в const
    obj2 = { name: "Artem" }; 

    return { obj1, obj2 };
}

const result = fn();
console.log(result);
