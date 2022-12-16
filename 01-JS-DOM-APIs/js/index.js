window.onload = () => {
  let opacity = 0;
  let intervalID = setInterval(show, 200);

  function show() {
    let section = document.getElementById('fade-in');
    opacity = Number(
      window.getComputedStyle(section).getPropertyValue('opacity')
    );
    if (opacity < 1) {
      opacity = opacity + 0.1;
      section.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }
};

function buttonAlert() {
  alert('Presionaste el boton!');
}

function getJoke() {
  //api.icndb.com/jokes/random
  /* fetch(' http://api.icndb.com/jokes/random') <-- no funciona?? */
  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .catch((err) => {
      let section = document.getElementById('fade-in');
      section.classList.add('fetch-error');
      console.log(err);
    })
    .then((data) => {
      let section = document.getElementById('fade-in');
      section.classList.remove('fetch-error');
      section.innerText = data.value;
    });
}
