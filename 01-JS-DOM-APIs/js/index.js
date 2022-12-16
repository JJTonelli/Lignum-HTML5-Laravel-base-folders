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

  fillTable(generateMatrix(4, 4));
};

function buttonAlert() {
  alert('Presionaste el boton!');
}

async function getJoke() {
  //api.icndb.com/jokes/random
  /* fetch(' http://api.icndb.com/jokes/random') <-- no funciona?? */
  await fetch('https://api.chucknorris.io/jokes/random')
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

async function getRepositories() {
  let keyword = document.getElementById('input-search-repository').value;
  if (keyword === '') {
    alert('El campo de busqueda no puede estar vacio');
  } else {
    let repositories = document.getElementById('repositories-list');
    repositories.innerHTML = '';
    await fetch(
      `https://api.github.com/search/repositories?q=${keyword}&page=1&per_page=10`
    )
      .then((response) => response.json())
      .then((data) => {
        data.items.forEach((element) => {
          repositories.innerHTML += `<li><a href="${element.html_url}">${element.html_url}</a></li>`;
        });
        document.getElementById('input-search-repository').value = '';
      });
  }
}

function generateMatrix(rows, columns) {
  let matrix = [];

  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = Math.floor(Math.random() * 10);
    }
  }
  return matrix;
}

function fillTable(generateMatrix) {
  let matrix = generateMatrix;
  let table = document.getElementById('matrix');

  for (let i = 0; i < matrix.length; i++) {
    let tr = document.createElement('tr');
    let matrix2 = matrix[i];
    for (let j = 0; j < matrix2.length; j++) {
      let td = document.createElement('td');
      let text = document.createTextNode(matrix2[j]);
      td.appendChild(text);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
