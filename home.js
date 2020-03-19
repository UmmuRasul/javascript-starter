let person = {
    name: 'Mariam',
    age: 40,
    partTime: false,
    showInfo: function(realAge) //method
        {
            showMessage(this.name + ' is   ' + realAge + ' years old'); //'this' refers to the current object
        }
};
person.showInfo(45);