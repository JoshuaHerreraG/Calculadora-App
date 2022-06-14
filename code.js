"use strict";

class Calculadora {
  constructor() {
    this.pantalla = document.getElementById("result");
    this.numeros = document.querySelectorAll("#numbers");
    this.operadores = document.querySelectorAll("#funcion");
    this.mostrarPantalla = "";
    this.valores = [];
    this.vistaOperador = "";
  }

  mostrarNumeros() {
    let valoresDeBotones = [];

    this.numeros.forEach((node) => {
      valoresDeBotones.push(node.textContent);
    });

    for (let i = 0; i < valoresDeBotones.length; i++) {
      this.numeros[i].addEventListener("click", () => {
        this.mostrarPantalla += valoresDeBotones[i];
        this.pantalla.textContent = this.mostrarPantalla;
      });
    }
  }

  sumarLasCantidades() {
    let suma = this.operadores[2];

    suma.addEventListener("click", () => {
      this.vistaOperador = "+";
      if (this.pantalla.textContent !== "") {
        let numero = parseInt(this.pantalla.textContent);
        this.valores.push(numero);

        this.pantalla.textContent = "";
        this.mostrarPantalla = "";

        const resultado = this.valores.reduce((anterior, despues) => {
          return anterior + despues;
        });

        this.pantalla.textContent = `${resultado} ${this.vistaOperador}`;
      }
    });
  }

  restaLasCantidades() {
    const resta = this.operadores[1];

    resta.addEventListener("click", () => {
      this.vistaOperador = "-";
      if (this.pantalla.textContent !== "") {
        let numero = parseInt(this.pantalla.textContent);
        this.valores.push(numero);

        this.pantalla.textContent = "";
        this.mostrarPantalla = "";

        const resultado = this.valores.reduce((antes, despues) => {
          return antes - despues;
        });

        this.pantalla.textContent = `${resultado} ${this.vistaOperador}`;
      }
    });
  }

  multiplicarLasCantidades() {
    const multiplicar = this.operadores[0];

    multiplicar.addEventListener("click", () => {
      this.vistaOperador = "X";
      if (this.pantalla.textContent !== "") {
        let numero = parseInt(this.pantalla.textContent);
        this.valores.push(numero);

        this.pantalla.textContent = "";
        this.mostrarPantalla = "";

        const resultado = this.valores.reduce((antes, despues) => {
          return antes * despues;
        });

        this.pantalla.textContent = `${resultado} ${this.vistaOperador}`;
      }
    });
  }

  dividirLasCantidades() {
    const dividir = this.operadores[5];

    dividir.addEventListener("click", () => {
      this.vistaOperador = "/";
      if (this.pantalla.textContent !== "") {
        let numero = parseInt(this.pantalla.textContent);
        this.valores.push(numero);

        this.pantalla.textContent = "";
        this.mostrarPantalla = "";

        const resultado = this.valores.reduce((antes, despues) => {
          return antes / despues;
        });

        this.pantalla.textContent = `${resultado} ${this.vistaOperador}`;
      }
    });
  }

  resultadoFinal() {
    const operador = this.operadores;
    const igual = this.operadores[4];

    igual.addEventListener("click", () => {
      const ultimoValor = this.pantalla.textContent;
      this.valores.push(parseInt(ultimoValor));

      this.pantalla.textContent = "";
      this.mostrarPantalla = "";

      let resultado;

      if (this.vistaOperador == "+") {
        resultado = this.valores.reduce((antes, despues) => {
          return antes + despues;
        });

        this.pantalla.textContent = resultado;
      }

      if (this.vistaOperador == "-") {
        resultado = this.valores.reduce((antes, despues) => {
          return antes - despues;
        });

        this.pantalla.textContent = resultado;
      }

      if (this.vistaOperador == "X") {
        resultado = this.valores.reduce((antes, despues) => {
          return antes * despues;
        });

        this.pantalla.textContent = resultado;
      }

      if (this.vistaOperador == "/") {
        resultado = this.valores.reduce((antes, despues) => {
          return antes / despues;
        });

        this.pantalla.textContent = resultado;
      }

      // console.log(operador[2].textContent);
    });
  }

  borrarCantidad() {
    let borrar = this.operadores[3];
    borrar.addEventListener("click", () => {
      this.pantalla.textContent = "";
      this.mostrarPantalla = "";
      this.valores = [];
    });
  }
}
const calculadora = new Calculadora();

calculadora.mostrarNumeros();
calculadora.sumarLasCantidades();
calculadora.restaLasCantidades();
calculadora.multiplicarLasCantidades();
calculadora.dividirLasCantidades();
calculadora.resultadoFinal();
calculadora.borrarCantidad();
