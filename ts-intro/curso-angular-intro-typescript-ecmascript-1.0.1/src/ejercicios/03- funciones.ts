

console.log('Hola Munda!');

/*
    ===== Código de TypeScript =====
*/

function sumaar (a: number,b:number){
    return a + b;
}

function multiplicaar (numero:number, otronumero?:number, base:number=2):number{
    return numero=base;
}

interface Persona{
    nombre: string;
    pv: number;
}

function curar(personaje:Persona, puntos):void{
    personaje.pv += puntos;
    console.log( personaje);
}

const nuevo: Persona ={
    nombre:'Strider',
    pv: 50
}

curar( nuevo, 20);
