function showMessage(message) {
    document.getElementById('message').textContent = message;
} //document is the build-in represent the webpage
//textContent is the property

function changePercentOff(percentage) {
    document.getElementById("percent-off").textContent = percentage + "% OFF";
}