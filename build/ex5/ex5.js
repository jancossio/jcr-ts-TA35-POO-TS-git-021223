"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex5 = void 0;
const ex5 = () => { };
exports.ex5 = ex5;
class Espectador {
    constructor(nombre, edad, dinero) {
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
    }
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
    getDinero() {
        return this.dinero;
    }
    setDinero(dinero) {
        this.dinero = dinero;
    }
}
;
class Pelicula {
    constructor(titulo, duracion, edadMinima, director) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.edadMinima = edadMinima;
        this.director = director;
    }
    getEdadMinima() {
        return this.edadMinima;
    }
}
;
class Asiento {
    constructor(columna, fila, ocupado = false) {
        this.toString = () => {
            return `Fila:${this.fila} Columna ${this.columna}.`;
        };
        this.columna = columna;
        this.fila = fila;
        this.ocupado = ocupado;
    }
    setOcupado(ocupado) {
        this.ocupado = ocupado;
    }
    getOcupado() {
        return this.ocupado;
    }
    getFila() {
        return this.fila;
    }
    getColumna() {
        return this.columna;
    }
}
class Sala {
    constructor(pelicula, precioEntrada) {
        this.pelicula = pelicula;
        this.precioEntrada = precioEntrada;
        this.numEspectadores = 0;
        this.asientos = [];
        this.establecerAsientos();
    }
    establecerAsientos() {
        for (let i = 1; i < 9; i++) {
            let filaAsientos = [];
            for (let j = 65; j < 74; j++) {
                filaAsientos.push(new Asiento(String.fromCharCode(j), i));
            }
            this.asientos.push(filaAsientos);
        }
    }
    sentarEspectador(espectador) {
        let fila = Math.floor((Math.random() * 8) + 1);
        let columna = String.fromCharCode(Math.floor(Math.random() * (73 - 65) + 65));
        // console.log(`Lo sentimos, el asiento ${this.asientos[fila][columna.charCodeAt(0)-65]}`)
        let asiento = this.asientos[fila - 1][columna.charCodeAt(0) - 65];
        if (this.numEspectadores <= 56) {
            if (espectador.getEdad() < this.pelicula.getEdadMinima()) {
                console.log(`Lo sentimos, este espectador ${espectador.getNombre()}, no tiene la edad suficiente para ver la pelicula.`);
            }
            else if (espectador.getDinero() < this.precioEntrada) {
                console.log(`Lo sentimos, este espectador ${espectador.getNombre()}, no tiene el dinero suficiente para ver la pelicula.`);
            }
            else {
                while (asiento.getOcupado()) {
                    console.log(`Lo sentimos, el asiento ${this.asientos[fila - 1][columna.charCodeAt(0) - 65]} ya ha sido escogido.`);
                    fila = Math.floor((Math.random() * 8) + 1);
                    columna = String.fromCharCode(Math.floor(Math.random() * (73 - 65) + 65));
                    this.asientos[fila - 1][columna.charCodeAt(0) - 65].setOcupado(true);
                }
                espectador.setDinero(espectador.getDinero() - this.precioEntrada);
                this.numEspectadores++;
                console.log(`El espectador ${espectador.getNombre()}, ha sido asignado a la butaca: ${asiento.toString()}`);
            }
        }
        else {
            console.log(`Lo sentimos, la sala en la que intenta entrar está llena.`);
        }
    }
}
class MainApp {
    static run() {
        const pelicula1 = new Pelicula('Star Wars', 122, 7, 'George Lucas');
        const sala1 = new Sala(pelicula1, 7);
        const espectadores = new Array();
        espectadores[0] = new Espectador('Jaime', 10, 9);
        espectadores[1] = new Espectador('Loreta', 22, 9);
        espectadores[2] = new Espectador('Mireia', 10, 2);
        espectadores[3] = new Espectador('Pablo', 5, 15);
        espectadores[4] = new Espectador('Luis', 10, 9);
        espectadores[5] = new Espectador('Anna', 22, 9);
        espectadores[6] = new Espectador('Leire', 10, 2);
        espectadores[7] = new Espectador('Amaia', 9, 15);
        for (let i = 0; i < espectadores.length; i++) {
            sala1.sentarEspectador(espectadores[i]);
        }
    }
}
MainApp.run();
