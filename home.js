let key = 42; //global scope
function getSecretCode(value) {
    let keyGenerator = function() {
        let key = 12;
        console.log('in keyGenerator', key);
        return key; //finish executing key no longer exists
    }
    let code = value * keyGenerator();
    console.log('in getSecretCode:', key); //use the key outside fn
    return code;
}
let secretCode = getSecretCode(2)
showMessage(secretCode);


changePercentOff(30);