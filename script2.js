/* <div id="animalImages">
<img
id="image"
src=""
alt="RandomZooAnimals"
/>
</div>
<p id="animalName"></p>
<ul>
<li class="likeLine">Do you love this animal? <span id="heartButton">♡</span></li>
</ul>
*/

//FIRST - DOMCONTENTLOADED
let arr;

function fetchFirstAnimal() {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/1')
    .then(res => res.json())
    .then(data => data.forEach(addFirstAnimal))
}

function addFirstAnimal(animal) {
    const imageLocation = document.createElement('img')
    imageLocation.src = animal.image_link

    const animalName = document.createElement('p')
    animalName.innerText = "Meet Mr. " + animal.name

    const animalCard = document.getElementById('animalCardOne')

    animalCard.append(imageLocation, animalName)

}
window.addEventListener('DOMContentLoaded', fetchFirstAnimal)
window.addEventListener('DOMContentLoaded', fetchSecondAnimals)

function fetchSecondAnimals() {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/1')
    .then(res => res.json())
    .then(data => data.forEach(addSecondAnimal))
}

function addSecondAnimal(animal) {
    const imageLocation = document.createElement('img')
    imageLocation.src = animal.image_link

    const animalName = document.createElement('p')
    animalName.innerText = "Meet Mr. " + animal.name

    const animalCard = document.getElementById('animalCardTwo')

    animalCard.append(imageLocation, animalName)
}

//SECOND - CLICK EVENT - HEART LIKER
// target #heartButton
//addEventListener - Click  
// function should change heart from empty heart to full heart when clicked, if empty display === empty, if click display full heart

//class .heart will need a new span with the heart image, add JS to make heart clickable

const heartbutton = document.getElementById('heartButtonOne')

heartbutton.addEventListener("click", function() {
    const curColour = heartbutton.innerText;

    heartbutton.innerText = curColour === '♡' ? '♥' : '♡';
});

const heartbuttonTwo = document.getElementById('heartButtonTwo')

heartbuttonTwo.addEventListener("click", function() {
    const curColour = heartbuttonTwo.innerText;

    heartbuttonTwo.innerText = curColour === '♡' ? '♥' : '♡';
});

//THIRD - SUBMIT - CAPTION GENERATOR
//target form - #captionForm
//addEventListner - Submit
// function: will append new Caption to space below form via p tag
// take what the user types in and display it
// target where the user input is
//create p tag
//take user input and append the p

function addUserCaption(event) {

    event.preventDefault();

    const submittedCaptions = document.getElementById('responseOne')
    const userCaption = document.getElementById('captionOne')
    let addedCaption = document.createElement('li');
    addedCaption.innerText = userCaption.value;
    submittedCaptions.appendChild(addedCaption);

    event.target.reset();
}
const captionForm = document.getElementById('captionFormOne')
captionForm.addEventListener('submit', addUserCaption);


function addUserCaptionTwo(event) {

    event.preventDefault();

    const submittedCaptions = document.getElementById('responseTwo')
    const userCaption = document.getElementById('captionTwo')
    let addedCaption = document.createElement('li');
    addedCaption.innerText = userCaption.value;
    submittedCaptions.appendChild(addedCaption);

    event.target.reset();
}
const captionFormTwo = document.getElementById('captionFormTwo')
captionFormTwo.addEventListener('submit', addUserCaptionTwo);


