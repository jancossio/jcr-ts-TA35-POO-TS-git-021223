export const ex5 = () => {};

class Espectador{
    private nombre : string;
    private edad : number;
    private dinero : number;

    constructor(nombre:string, edad:number, dinero:number){
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
    }

    getNombre():string{
        return this.nombre;
    }

    getEdad():number{
        return this.edad;
    }

    getDinero():number{
        return this.dinero;
    }

    setDinero(dinero:number):void{
        this.dinero = dinero;
    }
};

class Pelicula{
    private titulo : string;
    private duracion : number;
    private edadMinima : number;
    private director : string;

    constructor(titulo:string, duracion:number, edadMinima:number, director:string){
        this.titulo = titulo;
        this.duracion = duracion;
        this.edadMinima = edadMinima;
        this.director = director;
    }

    getEdadMinima():number{
        return this.edadMinima;
    }
};

class Asiento{
    private columna : string;
    private fila : number;
    private ocupado : boolean;

    constructor(columna:string, fila:number, ocupado:boolean=false){
        this.columna = columna;
        this.fila = fila;
        this.ocupado = ocupado;
    }

    setOcupado(ocupado:boolean):void{
        this.ocupado = ocupado;
    }

    getOcupado():boolean{
        return this.ocupado;
    }

    getFila():number{
        return this.fila;
    }

    getColumna():string{
        return this.columna;
    }

    public toString = () : string => {
        return `Fila:${this.fila} Columna ${this.columna}.`;
    }
}

class Sala{
    private pelicula : Pelicula;
    private precioEntrada : number;
    private asientos : Asiento[][];
    private numEspectadores:number;

    constructor(pelicula:Pelicula, precioEntrada:number){
        this.pelicula = pelicula;
        this.precioEntrada = precioEntrada;
        this.numEspectadores = 0;
        this.asientos = [];
        this.establecerAsientos();
    }

    establecerAsientos() {
        for (let i = 1; i < 9; i++) {
            let filaAsientos: Asiento[] = [];
            for (let j = 65; j < 74; j++) {
                filaAsientos.push(new Asiento(String.fromCharCode(j), i));
            }
            this.asientos.push(filaAsientos);
        }
    } 
    

    sentarEspectador(espectador:Espectador):void{
        let fila = Math.floor((Math.random()*8)+1);
        let columna = String.fromCharCode(Math.floor(Math.random()*(73-65)+65));
        // console.log(`Lo sentimos, el asiento ${this.asientos[fila][columna.charCodeAt(0)-65]}`)
        let asiento = this.asientos[fila-1][columna.charCodeAt(0)-65];

        if(this.numEspectadores <= 56){
            if(espectador.getEdad() < this.pelicula.getEdadMinima()){
                console.log(`Lo sentimos, este espectador ${espectador.getNombre()}, no tiene la edad suficiente para ver la pelicula.`);

            }else if(espectador.getDinero() < this.precioEntrada){
                console.log(`Lo sentimos, este espectador ${espectador.getNombre()}, no tiene el dinero suficiente para ver la pelicula.`);

            }else{
                while(asiento.getOcupado()){
                    console.log(`Lo sentimos, el asiento ${this.asientos[fila-1][columna.charCodeAt(0)-65]} ya ha sido escogido.`)
                    fila = Math.floor((Math.random()*8)+1);
                    columna = String.fromCharCode(Math.floor(Math.random()*(73-65)+65));
                    this.asientos[fila-1][columna.charCodeAt(0)-65].setOcupado(true);
                }

                espectador.setDinero(espectador.getDinero()-this.precioEntrada);
                this.numEspectadores++;
                console.log(`El espectador ${espectador.getNombre()}, ha sido asignado a la butaca: ${asiento.toString()}`)
            }
        }else{
            console.log(`Lo sentimos, la sala en la que intenta entrar está llena.`)
        }
    }
}

class MainApp{
    static run(){
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

        for(let i=0; i<espectadores.length;i++){
            sala1.sentarEspectador(espectadores[i]);
        }
    }
}
MainApp.run();