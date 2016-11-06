"use strict";
var person = [{
  title: "Psychologist",
  name: "Carl Jung",
  bio: "Jung was a Swiss psychiatrist and psychotherapist who founded analytical psychology. His work has been influential not only in psychiatry but also in philosophy, anthropology, archaeology, literature, and religious studies. He was a prolific writer, though many of his works were not published until after his death.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/CGJung.jpg/440px-CGJung.jpg",
  lifespan: {
    birth: 1875,
    death: 1961
  }
}, {
  title: "Futurist",
  name: "Ray Kurzweil",
  bio: "Ray Kurzweil is an American author, computer scientist, inventor and futurist. Aside from futurism, he is involved in fields such as optical character recognition (OCR), text-to-speech synthesis, speech recognition technology, and electronic keyboard instruments. He has written books on health, artificial intelligence (AI), transhumanism, the technological singularity, and futurism.",
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Raymond_Kurzweil_Fantastic_Voyage.jpg",
  lifespan: {
    birth: 1948,
    death: "N/A"
  }
}, {
  title: "Artist",
  name: "Hieronymus Bosch",
  bio: "Bosch was an Early Netherlandish painter. His work is known for its fantastic imagery, detailed landscapes, and illustrations of religious concepts and narratives.",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Jheronimus_Bosch_%28cropped%29.jpg",
  lifespan: {
    birth: 1450,
    death: 1516
  }
}, {
  title: "Artist",
  name: "Alex Grey",
  bio: "Alex Grey is an American visionary artist, author, teacher, and Vajrayana practitioner. His body of work spans a variety of forms including performance art, process art, installation art, sculpture, visionary art, and painting.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Alex_Grey_2013.jpg/1024px-Alex_Grey_2013.jpg",
  lifespan: {
    birth: 1953,
    death: "N/A"
  }
}, {
  title: "Comedian",
  name: "Bill Hicks",
  bio: "Hicks was an American stand-up comedian, social critic, satirist, and musician. His material, encompassing a wide range of social issues including religion, politics, and philosophy, was controversial, and often steeped in dark comedy.",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Bill_Hicks_at_the_Laff_Stop_in_Austin%2C_Texas%2C_1991_%282%29_cropped.jpg",
  lifespan: {
    birth: 1961,
    death: 1994
  }
}, {
  title: "Abolitionist",
  name: "Harriet Tubman",
  bio: "Tubman was an American abolitionist, humanitarian, and an armed scout and spy for the United States Army during the American Civil War. Born into slavery, Tubman escaped and subsequently made some thirteen missions to rescue approximately seventy enslaved families and friends, using the network of antislavery activists and safe houses known as the Underground Railroad.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Harriet_Tubman_by_Squyer%2C_NPG%2C_c1885.jpg/440px-Harriet_Tubman_by_Squyer%2C_NPG%2C_c1885.jpg",
  lifespan: {
    birth: 1822,
    death: 1913
  }
}, {
  title: "Musician",
  name: "Greg Haines",
  bio: "Greg Haines is a musician and composer who was born in the UK but now resides in Berlin. His music has been compared to Arvo Pärt, Jóhann Jóhannsson, Deathprod, Gavin Bryars and many more in the area of contemporary classical and electro-acoustic music.",
  image: "http://www.fluid-radio.co.uk/wp-content/uploads/2013/07/greg-haines-iii.jpg",
  lifespan: {
    birth: "?",
    death: "N/A"
  }
}, {
  title: "Research Therapist",
  name: "Rick Doblin",
  bio: "Rick Doblin, Ph.D., is the founder and executive director of the Multidisciplinary Association for Psychedelic Studies (MAPS), a non-profit research organization established in 1986. His professional goal is to help develop legal contexts for the beneficial uses of psychedelics and marijuana, primarily as prescription medicines but also for personal growth for otherwise healthy people, and eventually to become a legally licensed psychedelic therapist.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Rick_Doblin_-_MAPS.png/440px-Rick_Doblin_-_MAPS.png",
  lifespan: {
    birth: 1953,
    death: "N/A"
  }
}];

var i = 0;
var outputEl = document.getElementById("outputEl");
var input = document.getElementById("input");
var holder = "";

// var outputEl = document.getElementById("outputEl");

for (let i = 0; i < person.length; i++) {
  // Give each person element a unique identifier
  // holder += `<div class="person__container" id="person--${i}"></div>`;
  holder += `<article class="peeps">`;

  holder += `<header>`;
  holder += `<h4>${person[i].title}</h4>`;
  holder += `<h3>${person[i].name}</h3>`;
  holder += `</header>`;

  holder += `<section>`;
  holder += `<img src="${person[i].image}">`;
  holder += `<p class="bio">${person[i].bio}</p>`;
  holder += `</section>`;

  holder += `<footer>`;
  holder += `<h5>${person[i].lifespan.birth} - ${person[i].lifespan.death}</h5>`;
  holder += `</footer>`;

  holder += `</article>`;
}

outputEl.innerHTML = holder;
var containerEl = document.getElementsByClassName("peeps");
var fieldEl = document.getElementById("input");

for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function(click) {
    click.currentTarget.classList.toggle("dotted");
    document.getElementById("input").focus();
  });
}

input.addEventListener("keyup", function(click) {
  if (click.keyCode === 13) {
    let testy = fieldEl.innerHTML = holder.event.target.value;
    console.log("testy: ", testy);
  }
});
