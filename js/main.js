class Persona {
  #edad;

  constructor(nombre) {
    this.nombre = nombre;
    this.#edad = 25;
  }

  sayHello() {
    setTimeout(function () {
      console.log("Hola mi nombre es " + this.nombre);
    }, 3000);
  }

  sayHello2() {
    setTimeout(() => {
      console.log("Hola mi nombre es " + this.nombre);
    }, 2000);
  }
}

const promesa = new Promise((resolve, reject) => {
  const sum = 1 + 2;

  if (sum == 2) {
    resolve("todo bien");
  } else {
    reject("todo mal");
  }
});

promesa
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  });
