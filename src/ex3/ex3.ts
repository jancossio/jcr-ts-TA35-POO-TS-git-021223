export const ex3 = () => {};

class Raices{
    private a : number;
    private b : number;
    private c : number;

    constructor(a:number, b:number, c:number){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getDiscriminente():number{
        return (Math.pow(this.b,2)) - (4*this.a*this.c);
    }

    tieneRaices():boolean{
        return this.getDiscriminente() > 0;
    }

    tieneRaiz():boolean{
        return this.getDiscriminente() == 0;
    }

    calcular():void{
        const discriminante = this.getDiscriminente();

        if(discriminante > 0){
            console.log('La ecuacion tiene 2 posibles soluciones: ');
            this.obtenerRaices();
        }else if(discriminante === 0){
            console.log('La ecuacion tiene una sola solucion: ');
            this.obtenerRaiz();
        }else{
            console.log('La ecuacion no posee ninguna solucion.');
        }
    }

    obtenerRaices():void{
        const discriminante = this.getDiscriminente();
        console.log((-this.b+Math.sqrt(discriminante))/(2*this.a));
        console.log((-this.b-Math.sqrt(discriminante))/(2*this.a));
    }

    obtenerRaiz():void{
        console.log((-this.b)/(2*this.a));
    }
};

class MainApp{
    static run(){
        const ecuacion1 = new Raices(3,5,2);
        const ecuacion2 = new Raices(1,2,1);
        const ecuacion3 = new Raices(2,1,2);

        console.log(`Ecuacion 1: `);
        ecuacion1.calcular();
        console.log(`Ecuacion 2: `);
        ecuacion2.calcular();
        console.log(`Ecuacion 3: `);
        ecuacion3.calcular();
    }
}
MainApp.run();