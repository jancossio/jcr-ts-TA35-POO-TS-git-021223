export const ex1 = () => {};
interface Entregable{
    entregar():void;
    devolver():void;
    isEntregado():boolean;
    compareTo(a:Entregable):number;
}

class Serie implements Entregable{
    private titulo : string;
    private numTemporadas : number;
    private entregado : boolean;
    private genero : string;
    private creador : string;

    constructor(titulo:string, creador:string){
        this.titulo = titulo;
        this.numTemporadas = 3;
        this.entregado = false;
        this.genero = '';
        this.creador = creador;
    }

    entregar():void{
        this.entregado = true;
    }

    devolver():void{
        this.entregado = false;
    }

    isEntregado():boolean{
        return this.entregado;
    }

    compareTo(a:Entregable):number{
        if(a instanceof Serie){
            return a.numTemporadas - this.numTemporadas;
        }
        return 0;
    }

    getTitulo():string{
        return this.titulo;
    }
    

    setTitulo(titulo:string):void{
        this.titulo = titulo;
    }

    getNumTemporadas():number{
        return this.numTemporadas;
    }

    setNumTemporadas(numTemporadas:number):void{
        this.numTemporadas = numTemporadas;
    }

    getGenero():string{
        return this.genero;
    }

    setGenero(genero:string):void{
        this.genero = genero;
    }

    getCreador():string{
        return this.creador;
    }

    setCreador(creador:string):void{
        this.creador = creador;
    }

    public toString = () : string => {
        return `Serie (titulo: ${this.titulo}, numTemporadas: ${this.numTemporadas}, entregado: ${this.entregado}, genero: ${this.genero}, creador: ${this.creador})`;
    }
};

class Videojuego implements Entregable{
    private titulo : string;
    private horasEstimadas : number;
    private entregado : boolean;
    private genero : string;
    private compania : string;

    constructor(titulo:string, horasEstimadas:number=10, genero:string, compania:string){
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.entregado = false;
        this.genero = '';
        this.compania = compania;
    }

    entregar():void{
        this.entregado = true;
    }

    devolver():void{
        this.entregado = false;
    }

    isEntregado():boolean{
        return this.entregado;
    }

    compareTo(a:Entregable):number{
        if(a instanceof Videojuego){
            return a.horasEstimadas - this.horasEstimadas;
        }
        return 0;
    }

    getTitulo():string{
        return this.titulo;
    }

    setTitulo(titulo:string):void{
        this.titulo = titulo;
    }

    getHorasEstimadas():number{
        return this.horasEstimadas;
    }

    setHorasEstimadas(horasEstimadas:number):void{
        this.horasEstimadas = horasEstimadas;
    }

    getGenero():string{
        return this.genero;
    }

    setGenero(genero:string):void{
        this.genero = genero;
    }

    getCompania():string{
        return this.compania;
    }

    setCompania(compania:string):void{
        this.compania = compania;
    }

    public toString = () : string => {
        return `Videojuego (titulo: ${this.titulo}, horasEstimadas: ${this.horasEstimadas}, entregado: ${this.entregado}, genero: ${this.genero}, compania: ${this.compania})`;
    }
};

class MainApp{

    static run(){
        const series: Serie[] = new Array(5);
        const videojuegos: Videojuego[] = new Array(5);

        series[0] = new Serie('Inside Job', 'Shion Takeuchi');
        series[0].setNumTemporadas(2); 
        series[1] = new Serie('Gravity Falls', 'Alex Hirsch');
        series[1].setNumTemporadas(2); 
        series[2] = new Serie('Breaking Bad', 'Vince Gillian');
        series[2].setNumTemporadas(5); 
        series[3] = new Serie('The Boys', 'Eric Kripke');
        series[3].setNumTemporadas(4); 
        series[4] = new Serie('The Mandalorian', 'Jon Favreau');
        series[0].setNumTemporadas(4); 

        series[1].entregar();
        series[2].entregar();
        series[3].entregar();

        videojuegos[0] = new Videojuego('Jedi Survivor', 20,'Aventura','Electronic Arts');
        videojuegos[1] = new Videojuego('Hi Fi Rush', 40,'Plataformas','Tango Games');
        videojuegos[2] = new Videojuego('Hogwarts Legacy', 14,'Aventura','Avalanche Software');
        videojuegos[3] = new Videojuego('Spiderman 2', 20,'Plataformas','Insomniac Games');
        videojuegos[4] = new Videojuego('God of war', 28,'Aventura','Santa Monica Studio');

        videojuegos[0].entregar();
        videojuegos[3].entregar();
        videojuegos[4].entregar();

        var seriesEntregadas = 0;
        var juegosEntregados = 0;
        var masTemporadasSerie = new Serie('','');
        masTemporadasSerie.setNumTemporadas(0);
        var masHorasJuego = new Videojuego('',5,'','');
        masHorasJuego.setHorasEstimadas(0);

        for(let i=0; i<series.length; i++){
            if(series[i].isEntregado()){
                seriesEntregadas++;
            }
            if(series[i].getNumTemporadas() > masTemporadasSerie.getNumTemporadas()){
                masTemporadasSerie = series[i];
            }
        }
        console.log('Series entregadas: '+seriesEntregadas);
        console.log('Series con mas temporadas: '+masTemporadasSerie.toString());


        for(let i=0; i<videojuegos.length; i++){
            if(videojuegos[i].isEntregado()){
                juegosEntregados++;
            }
            if(videojuegos[i].getHorasEstimadas() > masHorasJuego.getHorasEstimadas()){
                masHorasJuego = videojuegos[i];
            }
        }
        console.log('Videojuegos entregados: '+seriesEntregadas);
        console.log('Videojuegos con mas horas: '+masHorasJuego.toString());
    }
}
MainApp.run();