//let productId = 3456; //we show to all functions

function showProductId() {
    let productId = 1234; //fix() also show this

    function fix() { //executed first then the upper fn
        let productId = 5678; //only fix function
        console.log('in fix:', productId);
    }
    fix();
    console.log('in showProduct:', productId);
}
showProductId();