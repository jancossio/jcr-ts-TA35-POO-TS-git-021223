export const ex4 = () => {};

class Persona{
    protected nombre : string;
    protected edad : number;
    protected sexo : string;

    constructor(nombre:string, edad:number, sexo:string){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
};

class Estudiante extends Persona{
    private calificacion : number;
    private disponible : boolean;

    constructor(nombre:string, edad:number, sexo:string, calificacion:number){
        super(nombre, edad, sexo);
        this.calificacion = calificacion;
        this.disponible = this.disponibilidad();
    }

    getDisponible():boolean{
        return this.disponible;
    }

    getCalificacion():number{
        return this.calificacion;
    }

    getSexo():string{
        return this.sexo;
    }

    disponibilidad():boolean{
        return (Math.random() <= 0.5);
    }
    
    public toString = () : string => {
        return `Alumn@: [${this.nombre}], Edad: [${this.edad}], Sexo: [${this.sexo}], Calificacion: [${this.calificacion}] y disponibilidad: [${this.disponible}].`;
    }
};

class Profesor extends Persona{
    private materia : string;
    private disponible : boolean;

    constructor(nombre:string, edad:number, sexo:string, materia:string){
        super(nombre, edad, sexo);
        this.materia = materia;
        this.disponible = this.disponibilidad();
    }

    getDisponible():boolean{
        return this.disponible;
    }

    getMateria():string{
        return this.materia;
    }

    disponibilidad():boolean{
        return (Math.random() <= 0.8);
    }

    public toString = () : string => {
        return `Profesor/a: [${this.nombre}], Edad: [${this.edad}], Sexo: [${this.sexo}], Materia: [${this.materia}] y disponibilidad: [${this.disponible}].`;
    }
};

class Aula{
    private id : number;
    private maxEstudiantes : number;
    private materia : string;
    private profesor : Profesor;
    private estudiantes: Estudiante[];
    private disponible : boolean;

    constructor(id:number, maxEstudiantes:number,  materia:string, profesor:Profesor, estudiantes: Estudiante[]){
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.materia = materia;
        this.profesor = profesor;
        this.estudiantes = estudiantes;
        this.disponible = this.estaDisponible();
    }

    puedeUtilizarse():void{
        if(this.disponible){
            console.log(`No se puede dar clase en el aula ${this.id}`);
        }else{
            console.log(`Se puede dar clase en el aula ${this.id}`);

            let alumnadoAprob = 0;
            let alumnosAprob = 0;
            let alumnasAprob = 0;

            for(let i=0; i<this.estudiantes.length ;i++){
                if(this.estudiantes[i].getCalificacion() > 5){
                    if(this.estudiantes[i].getSexo() === 'H'){
                        alumnosAprob++;
                    }else{
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

    estaDisponible():boolean{
        const porcentajeAlumnos = ((this.alumnosPresentes()*100)/this.maxEstudiantes);
        return (this.profesor.getDisponible() && (this.profesor.getMateria() === this.materia) && (porcentajeAlumnos > 50));
    }

    alumnosPresentes():number{
        let retNAlumnos = 0;
        for(let i=0; i<this.estudiantes.length;i++)
            if(this.estudiantes[i].getDisponible()){
                retNAlumnos++;
            }
        return retNAlumnos;
    }
};
const materias = ['Matematicas', 'Filosofia', 'Fisica'];


class MainApp{
    static run(){
        const profesor1 = new Profesor('Jofre', 33, 'H', 'Matematicas');
        let alumnado1 = new Array();
        alumnado1[0] = new Estudiante('Horacio',11,'H', 7);
        alumnado1[1] = new Estudiante('Salma',12,'M', 8);
        alumnado1[2] = new Estudiante('Laura',10,'M', 6);
        alumnado1[3] = new Estudiante('Joel',11,'H', 3);
        alumnado1[4] = new Estudiante('Andreu',8,'H', 7);

        const aula1 = new Aula(3, 10, 'Matematicas', profesor1, alumnado1);

        aula1.puedeUtilizarse();
    }
}
MainApp.run();