class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(eventoNombre, callback) {
    if (!this.listeners[eventoNombre]) {
      this.listeners[eventoNombre] = [];
    }

    this.listeners[eventoNombre].push(callback);
  }

  emit(eventoNombre) {
    if (this.listeners[eventoNombre]) {
      this.listeners[eventoNombre].forEach((callback) => {
        callback();
      });
    }
  }

  off(eventoNombre, callback) {}
}

class Pelicula extends EventEmitter {
  constructor(titulo, año, duracion) {
    super();
    this.titulo = titulo;
    this.año = año;
    this.duracion = duracion;
    this.cast = [];
  }

  play() {
    console.log(`Playing ${this.titulo}`);
  }

  pause() {
    console.log(`Paused ${this.titulo}`);
  }

  resume() {
    console.log(`Resuming ${this.titulo}`);
  }

  addCast(cast) {
    if (Array.isArray(cast)) {
      cast.forEach((actor) => {
        this.cast.push(actor);
      });
    } else {
      this.cast.push(cast);
    }
  }
}

class Actor {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Logger {
  constructor() {}

  log(info) {
    console.log(`output: The '${info}' event has been emitted`);
  }
}

/* let pelicula = new Pelicula(); */
let logger = new Logger();

/* pelicula.on('play', () => {
  logger.log('play');
  pelicula.play();
});

pelicula.on('pause', () => {
  logger.log('pause');
  pelicula.pause();
});

pelicula.on('resume', () => {
  logger.log('resume');
  pelicula.resume();
});

pelicula.emit('play');
pelicula.emit('pause');
pelicula.emit('resume'); */

const terminator = new Pelicula('Terminator I', 1985, 60);

const arnold = new Actor('Arnold Schwarzenegger', 50);

const actors = [
  new Actor('Paul Winfield', 50),

  new Actor('Michael Biehn', 50),

  new Actor('Linda Hamilton', 50),
];

terminator.addCast(arnold);

terminator.addCast(actors);

terminator.on('play', () => {
  logger.log('play');
  terminator.play();
});

terminator.on('pause', () => {
  logger.log('pause');
  terminator.pause();
});

terminator.on('resume', () => {
  logger.log('resume');
  terminator.resume();
});

console.log(terminator);

terminator.cast.forEach((actor) => {
  console.log(actor);
});

terminator.emit('play');
terminator.emit('pause');
terminator.emit('resume');
