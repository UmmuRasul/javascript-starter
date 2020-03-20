// const header = document.getElementById('message');
// header.style.color = 'blue';
// header.style.fontWeight = '100';


const button = document.getElementById('sreveiw');

button.addEventListener('click', function() {
    const review = document.getElementById('review');

    //when clicked again to remove it we need conditioal stt
    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none') //remove if element has d-none
    } else {
        review.classList.add('d-none') //add if does not contain d-none

    }
    // review.classList.remove('d-none'); // showing the hidden element by removing the d-none class by cling the button
});