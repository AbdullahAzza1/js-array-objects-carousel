const images = [
    {
        image: 'img/01.webp',
        title: 'Marvels Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvels Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
]
for (let i = 0; i < images.length; i++) {

    document.getElementById("carosello").innerHTML += '<div id="carousel">"
    <img id="img" src="${images[i].image}" alt="">
    <p class="desk1">${images[i].title}</p>
    <p class="desk2">${images[i].text}</p>
    "</div>';

}












//let currentImg = 0;
//const images = document.querySelectorAll("#carousel img");
//images[currentImg].classList.add("active");



//document.getElementById("nextBtn").addEventListener("click", function() {
  //  if (currentImg < images.length - 1) {
    //    images[currentImg].classList.remove("active");
      //  currentImg++;
     //   images[currentImg].classList.add("active");
    //}
//});

//document.getElementById("prevBtn").addEventListener("click", function() {
 //   if (currentImg > 0) {
 //       images[currentImg].classList.remove("active");
  //      currentImg--;
  //      images[currentImg].classList.add("active");
  //  }
//});