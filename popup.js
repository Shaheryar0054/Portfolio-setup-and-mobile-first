const info = [{
    title: 'Multi-post stories',
    tch_dtls: ['css', 'html', 'bootstrap', 'javascript'],
    img_src: 'img/Snapshoot.svg',
    des_txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam odit quis saepe fuga porro inventore ipsum cum. Nulla velit aspernatur nesciunt quo eum nobis. Non neque ut accusantium tempora?',
  }];
  
  const backWin = document.createElement('section');
  backWin.className = 'bck_win';
  const pupWin = document.createElement('section');
  pupWin.className = 'modlpup';
  pupWin.style.overflow = 'scroll';
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
              + '<button class="see-live">See Live<img src="img/Icon-see live.svg" alt="see live project button"></button>'
              + '<button class="see-source">See Source<img src="img/github1.svg" alt="See source code on github button"></button>'
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
