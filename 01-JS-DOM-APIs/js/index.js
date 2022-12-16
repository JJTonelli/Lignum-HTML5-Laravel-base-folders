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
