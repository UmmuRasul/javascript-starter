function getSecretCode(value) {
    let code = value * 42;
    return code;
}
showMessage(getSecretCode(2));