//FIRST - DOMCONTENTLOADED
let arr;

function fetchAnimals() {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/4')
    .then(res => res.json())
    .then(data => data.forEach(addAnimalsToDiv))
}
// fetchCharacters();

function addAnimalsToDiv(animal) {
    const imageLocation = document.getElementById('image')
    imageLocation.src = animal.image_link
    // const imageLocation2 = document.getElementById('image2')
    // imageLocation2.src = animal.image_link
    // const imageLocation3 = document.getElementById('image3')
    // imageLocation2.src = animal.image_link
    // const imageLocation4 = document.getElementById('image4')
    // imageLocation2.src = animal.image_link
}

window.addEventListener('DOMContentLoaded', fetchAnimals)

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function heartClicker() {
    const heartSpan = document.createElement('span')
    heartSpan.innerText = EMPTY_HEART
    const heartLocation = document.getElementsByClassName('heart')[0]
    heartLocation.append(heartSpan)

    heartSpan.
    console.log('something is happening')
}

heartClicker();

    // if ( heart.innerText === EMPTY_HEART) {
    //     heart.innerText = FULL_HEART;
    //     heart.className = "activated-heart";
    //   } else {
    //     heart.innerText = EMPTY_HEART;
    //     heart.className = "";
    //   }

    // .addEventListener('click',  )
    // create Span next to ul.heart and add empty_Heart 
    // add logic if empty then fill when clicked



// const articleHearts = document.getElementsByClassName(".heart");

// function likeCallback(e) {
//   const heart = e.target;
//   mimicServerCall("bogusUrl")
//     .then(function(){
//       if ( heart.innerText === EMPTY_HEART) {
//         heart.innerText = FULL_HEART;
//         heart.className = "activated-heart";
//       } else {
//         heart.innerText = EMPTY_HEART;
//         heart.className = "";
//       }
//     })
//     .catch(function(error) {
//       const modal = document.getElementById("modal");
//       modal.className = "";
//       modal.innerText = error;
//       setTimeout(() =>  modal.className = "hidden", 3000);
//     });
// }

// for (const glyph of articleHearts) {
//   glyph.addEventListener("click", likeCallback);
// }

//SECOND - CLICK EVENT - HEART LIKER

//class .heart will need a new span with the heart image, add JS to make heart clickable
// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'

// const articleHearts = document.querySelectorAll(".like-glyph");

// function likeCallback(e) {
//   const heart = e.target;
//   mimicServerCall("bogusUrl")
//     .then(function(){
//       if ( heart.innerText === EMPTY_HEART) {
//         heart.innerText = FULL_HEART;
//         heart.className = "activated-heart";
//       } else {
//         heart.innerText = EMPTY_HEART;
//         heart.className = "";
//       }
//     })
//     .catch(function(error) {
//       const modal = document.getElementById("modal");
//       modal.className = "";
//       modal.innerText = error;
//       setTimeout(() =>  modal.className = "hidden", 3000);
//     });
// }


//THIRD - SUBMIT - CAPTION GENERATOR