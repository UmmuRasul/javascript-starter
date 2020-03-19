let mySymbol = Symbol();
let person = {
    name: 'Mariam',
    age: 40,
    partTime: false,
    [mySymbol]: 'secretInformation'
};
person.age = 49; //dot notation
//person['age'] = 47; //sq bracket notation
showMessage(person.age); //the dot syntax