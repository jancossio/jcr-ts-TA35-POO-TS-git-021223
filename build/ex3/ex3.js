"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex3 = void 0;
const ex3 = () => { };
exports.ex3 = ex3;
class Raices {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminente() {
        return (Math.pow(this.b, 2)) - (4 * this.a * this.c);
    }
    tieneRaices() {
        return this.getDiscriminente() > 0;
    }
    tieneRaiz() {
        return this.getDiscriminente() == 0;
    }
    calcular() {
        const discriminante = this.getDiscriminente();
        if (discriminante > 0) {
            console.log('La ecuacion tiene 2 posibles soluciones: ');
            this.obtenerRaices();
        }
        else if (discriminante === 0) {
            console.log('La ecuacion tiene una sola solucion: ');
            this.obtenerRaiz();
        }
        else {
            console.log('La ecuacion no posee ninguna solucion.');
        }
    }
    obtenerRaices() {
        const discriminante = this.getDiscriminente();
        console.log((-this.b + Math.sqrt(discriminante)) / (2 * this.a));
        console.log((-this.b - Math.sqrt(discriminante)) / (2 * this.a));
    }
    obtenerRaiz() {
        console.log((-this.b) / (2 * this.a));
    }
}
;
class MainApp {
    static run() {
        const ecuacion1 = new Raices(3, 5, 2);
        const ecuacion2 = new Raices(1, 2, 1);
        const ecuacion3 = new Raices(2, 1, 2);
        console.log(`Ecuacion 1: `);
        ecuacion1.calcular();
        console.log(`Ecuacion 2: `);
        ecuacion2.calcular();
        console.log(`Ecuacion 3: `);
        ecuacion3.calcular();
    }
}
MainApp.run();
