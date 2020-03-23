//searching through an Array using indexOf
const values = ['a', 'b', 'c', 'd', 'z'];
console.log(values.indexOf('a'));
console.log(values.indexOf('m')); //get -1 insted of undefine
console.log(values.indexOf('c'));


//filter thru an Array
const values2 = ['a', 'b', 'c', 'd', 'z'];
const set = values2.filter(function(item) {
    console.log('item:', item);
    return item > 'b';
});
console.log(set);

//find ()
const values3 = ['a', 'bbb', 'c'];

const found = values3.find(function(item) {
    return item.length > 1;
});
console.log(found);


//forEach()
const values4 = ['a', 'b', 'c', 'd', 'z'];
values4.forEach(function(item) {
    console.log(item)
});