"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex2 = void 0;
const ex2 = () => { };
exports.ex2 = ex2;
class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
        this.toString = () => {
            return `El Libro: [${this.titulo}] con el ISBN: [${this.ISBN}], creado por el autor: [${this.autor}], tiene ${this.numPaginas} paginas.`;
        };
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    getISBN() {
        return this.ISBN;
    }
    gstISBN(ISBN) {
        this.ISBN = ISBN;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    getNumPaginas() {
        return this.numPaginas;
    }
    setNumPaginas(numPaginas) {
        this.numPaginas = numPaginas;
    }
}
;
class MainApp {
    static run() {
        const libro1 = new Libro('qwerty', 'Valle de los lobos', 'Laura Gallego', 224);
        const libro2 = new Libro('asdfgh', 'El ladron del rayo', 'Rick Riordan', 268);
        console.log('Libro1: ' + libro1.toString());
        console.log('Libro2: ' + libro2.toString());
        if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
            console.log(`El libro ${libro1.getTitulo()} tiene un numero de paginas superior (${libro1.getNumPaginas()}) que ${libro2.getTitulo()}`);
        }
        else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
            console.log(`El libro ${libro2.getTitulo()} tiene un numero de paginas superior (${libro2.getNumPaginas()}) que ${libro1.getTitulo()}`);
        }
        else if (libro1.getNumPaginas() === libro2.getNumPaginas()) {
            console.log(`Los libros ${libro1.getTitulo()} y ${libro2.getTitulo()} tienen el mismo numero de paginas: ${libro1.getNumPaginas()}`);
        }
    }
}
MainApp.run();
