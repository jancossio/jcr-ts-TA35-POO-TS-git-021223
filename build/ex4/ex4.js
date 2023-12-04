"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex4 = void 0;
const ex4 = () => { };
exports.ex4 = ex4;
class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
}
;
class Estudiante extends Persona {
    constructor(nombre, edad, sexo, calificacion) {
        super(nombre, edad, sexo);
        this.toString = () => {
            return `Alumn@: [${this.nombre}], Edad: [${this.edad}], Sexo: [${this.sexo}], Calificacion: [${this.calificacion}] y disponibilidad: [${this.disponible}].`;
        };
        this.calificacion = calificacion;
        this.disponible = this.disponibilidad();
    }
    getDisponible() {
        return this.disponible;
    }
    getCalificacion() {
        return this.calificacion;
    }
    getSexo() {
        return this.sexo;
    }
    disponibilidad() {
        return (Math.random() <= 0.5);
    }
}
;
class Profesor extends Persona {
    constructor(nombre, edad, sexo, materia) {
        super(nombre, edad, sexo);
        this.toString = () => {
            return `Profesor/a: [${this.nombre}], Edad: [${this.edad}], Sexo: [${this.sexo}], Materia: [${this.materia}] y disponibilidad: [${this.disponible}].`;
        };
        this.materia = materia;
        this.disponible = this.disponibilidad();
    }
    getDisponible() {
        return this.disponible;
    }
    getMateria() {
        return this.materia;
    }
    disponibilidad() {
        return (Math.random() <= 0.8);
    }
}
;
class Aula {
    constructor(id, maxEstudiantes, materia, profesor, estudiantes) {
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.materia = materia;
        this.profesor = profesor;
        this.estudiantes = estudiantes;
        this.disponible = this.estaDisponible();
    }
    puedeUtilizarse() {
        if (this.disponible) {
            console.log(`No se puede dar clase en el aula ${this.id}`);
        }
        else {
            console.log(`Se puede dar clase en el aula ${this.id}`);
            let alumnadoAprob = 0;
            let alumnosAprob = 0;
            let alumnasAprob = 0;
            for (let i = 0; i < this.estudiantes.length; i++) {
                if (this.estudiantes[i].getCalificacion() > 5) {
                    if (this.estudiantes[i].getSexo() === 'H') {
                        alumnosAprob++;
                    }
                    else {
                        alumnasAprob++;
                    }
                    alumnadoAprob++;
                }
            }
            console.log(`Hay un total de: ${alumnadoAprob} estudiantes del alumnado aprobados.`);
            console.log(`Hay un total de: ${alumnosAprob} alumnos aprobados.`);
            console.log(`Hay un total de: ${alumnasAprob} alumnas aprobadas.`);
        }
    }
    estaDisponible() {
        const porcentajeAlumnos = ((this.alumnosPresentes() * 100) / this.maxEstudiantes);
        return (this.profesor.getDisponible() && (this.profesor.getMateria() === this.materia) && (porcentajeAlumnos > 50));
    }
    alumnosPresentes() {
        let retNAlumnos = 0;
        for (let i = 0; i < this.estudiantes.length; i++)
            if (this.estudiantes[i].getDisponible()) {
                retNAlumnos++;
            }
        return retNAlumnos;
    }
}
;
const materias = ['Matematicas', 'Filosofia', 'Fisica'];
class MainApp {
    static run() {
        const profesor1 = new Profesor('Jofre', 33, 'H', 'Matematicas');
        let alumnado1 = new Array();
        alumnado1[0] = new Estudiante('Horacio', 11, 'H', 7);
        alumnado1[1] = new Estudiante('Salma', 12, 'M', 8);
        alumnado1[2] = new Estudiante('Laura', 10, 'M', 6);
        alumnado1[3] = new Estudiante('Joel', 11, 'H', 3);
        alumnado1[4] = new Estudiante('Andreu', 8, 'H', 7);
        const aula1 = new Aula(3, 10, 'Matematicas', profesor1, alumnado1);
        aula1.puedeUtilizarse();
    }
}
MainApp.run();
