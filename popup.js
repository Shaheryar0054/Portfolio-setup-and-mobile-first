// Card Display
const card = [{
  id: 0,
  title: 'Data Dashboard Healthcare',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech: ['html', 'css', 'boostrap'],
},
{
  id: 1,
  title: 'Website Portfolio',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech: ['html', 'css', 'boostrap'],
},
{
  id: 2,
  title: 'Profesional Art Printing Data More',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech: ['html', 'css', 'bootstrap'],
},
{
  id: 3,
  title: 'Data Dashboard Healthcare',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  img: 'img/s-p.png',
  tech: ['html', 'css', 'bootstrap'],
},
{
  id: 4,
  title: 'Website Portfolio',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech: ['html', 'css', 'bootstrap'],
},
{
  id: 5,
  title: 'Website Portfolio',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  tech: ['html', 'css', 'bootstrap'],
},

];

function displayCards() {
  let result = '';

  card.forEach((card) => {
    result += `<div class="item-2">
      <div class="content-3-h">
      <div class="tech">
          <h2 class="heading-5">${card.title}</h2>
          <p class="paragraph-3">${card.description}</p>
          <ul class="list-3">
              <li class="button-3">${card.tech[0]}</li>
              <li class="button-3">${card.tech[1]}</li>
              <li class="button-3">${card.tech[2]}</li>
          </ul>
          </div>
          <button class="see-button" id="prjsbtn">See Project</button>
      </div>
  </div>`;
  });

  document.getElementById('main-container').innerHTML = result;
}

displayCards();

// Modal popup
const info = [{
  title: 'Multi-post stories',
  tch_dtls: ['css', 'html', 'bootstrap', 'javascript'],
  img_src: 'img/Snapshoot.svg',
  des_txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam odit quis saepe fuga porro inventore ipsum cum. Nulla velit aspernatur nesciunt quo eum nobis. Non neque ut accusantium tempora?',
  livePreview: 'https://shaheryar0054.github.io/',
  sourceURL: 'https://github.com/Shaheryar0054/Portfolio-setup-and-mobile-first',
}];

const backWin = document.createElement('section');
backWin.className = 'bck_win';
const pupWin = document.createElement('section');
pupWin.className = 'modlpup';
// pupWin.style.overflow = 'scroll';
pupWin.innerHTML = '<section class="pup_txt">'
    + `<h3>${info[0].title}</h3>`
    + '<ul>'
    + `<li>${info[0].tch_dtls[0]}</li>`
    + `<li>${info[0].tch_dtls[1]}</li>`
    + `<li>${info[0].tch_dtls[2]}</li>`
    + `<li>${info[0].tch_dtls[3]}</li>`
    + '</ul>'
    + `<img class="live-img" src=${info[0].img_src} alt="project display image">`
    + '</section>'
    + '<section class="pupdesc">'
    + `<p>${info[0].des_txt}</p>`
    + '<section class="pupbtns">'
    + `<a href="${info[0].sourceURL}" class="live-btn">`
    + '<button class="see-live">see Live<img src="img/Icon-see live.svg" alt="see live       project button"></button>'
    + '</a>'
    + `<a href="${info[0].sourceURL}" class="live-btn">`
    + '<button class="see-source">See Source<img src="img/github1.svg" alt="See source code on github button"></button>'
    + '</a>'
    + '</section>'
    + '</section>';

const popupClose = document.createElement('button');
popupClose.id = 'cl_pup';
pupWin.appendChild(popupClose);

function addCont() {
  document.body.appendChild(backWin);
  // document.body.style.overflow = 'hidden';
  document.body.appendChild(pupWin);
}

function closePopp() {
  document.body.removeChild(backWin);
  document.body.removeChild(pupWin);
  // document.body.style.overflow = 'visible';
}

const pupBtn = document.querySelectorAll('#prjsbtn');
pupBtn.forEach((btn) => {
  btn.addEventListener('click', addCont);
});

popupClose.addEventListener('click', closePopp);
