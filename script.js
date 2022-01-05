//FIRST - DOMCONTENTLOADED
let arr;

function fetchAnimals() {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/4')
    .then(res => res.json())
    .then(data => data.forEach(addAnimalsToDiv))
}

function addAnimalsToDiv(animal) {
    const imageLocation = document.getElementById('image')
    imageLocation.src = animal.image_link
}

window.addEventListener('DOMContentLoaded', fetchAnimals)

//SECOND - CLICK EVENT - HEART LIKER
// target #heartButton
//addEventListener - Click  
// function should change heart from empty heart to full heart when clicked

//class .heart will need a new span with the heart image, add JS to make heart clickable

const blankHeart = '♡'
const fullHeart = '♥'
const likeLine = document.getElementById('likeLine')
const heartSpot = document.getElementById('heartButton')

// const heart = document.querySelectorAll('.heart')

// likeLike.addEventListener('click', () => heartSpot.innerText = fullHeart);



// function heartClicker(event){
//     const heart = event.target;

//     heartSpot.addEventListener('click', () => {
//         console.log('you have clicked me')
//         if (heart.innerText = blankHeart) {
//         heart.innerText = fullHeart;
//         heart.className = "activated";
//         } else {
//         heart.innerText = blankHeart;
//         heart.className = "";
//         }
//     })
// }



//THIRD - SUBMIT - CAPTION GENERATOR
//target form - .captionForm
//addEventListner - Submit
// function: will append new Caption to space below form via p tag


function addUserCaption(event) {
    let captionLog = document.getElementById('captions').value;
    let userInput = document.createElement('p');
    userInput.textContext = captionLog;
    event.target.reset();

    event.preventDefault();
    console.log('clicked!')
}
const captionForm = document.getElementById('captioForm')
captionForm.addEventListener('submit', addUserCaption);