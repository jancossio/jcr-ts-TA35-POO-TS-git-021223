export const ex2 = () => {};

class Libro{
    private ISBN : string;
    private titulo : string;
    private autor : string;
    private numPaginas : number;

    constructor(ISBN:string, titulo:string, autor:string, numPaginas:number){
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }

    getISBN():string{
        return this.ISBN;
    }
    
    gstISBN(ISBN:string):void{
        this.ISBN = ISBN;
    }

    getTitulo():string{
        return this.titulo;
    }
    
    setTitulo(titulo:string):void{
        this.titulo = titulo;
    }

    getAutor():string{
        return this.autor;
    }
    
    setAutor(autor:string):void{
        this.autor = autor;
    }

    getNumPaginas():number{
        return this.numPaginas;
    }
    
    setNumPaginas(numPaginas:number):void{
        this.numPaginas = numPaginas;
    }

    public toString = () : string => {
        return `El Libro: [${this.titulo}] con el ISBN: [${this.ISBN}], creado por el autor: [${this.autor}], tiene ${this.numPaginas} paginas.`;
    }
};

class MainApp{

    static run(){
        const libro1 = new Libro('qwerty', 'Valle de los lobos', 'Laura Gallego', 224);
        const libro2 = new Libro('asdfgh', 'El ladron del rayo', 'Rick Riordan',268);

        console.log('Libro1: '+libro1.toString());
        console.log('Libro2: '+libro2.toString());

        if(libro1.getNumPaginas() > libro2.getNumPaginas()){
            console.log(`El libro ${libro1.getTitulo()} tiene un numero de paginas superior (${libro1.getNumPaginas()}) que ${libro2.getTitulo()}`);
        }else if(libro1.getNumPaginas() < libro2.getNumPaginas()){
            console.log(`El libro ${libro2.getTitulo()} tiene un numero de paginas superior (${libro2.getNumPaginas()}) que ${libro1.getTitulo()}`);
        }else if(libro1.getNumPaginas() === libro2.getNumPaginas()){
            console.log(`Los libros ${libro1.getTitulo()} y ${libro2.getTitulo()} tienen el mismo numero de paginas: ${libro1.getNumPaginas()}`);
        }
    }
}
MainApp.run();