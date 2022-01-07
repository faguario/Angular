import { createNoSubstitutionTemplateLiteral } from "typescript";


console.log('Hola Munda!');

/*
    ===== Código de TypeScript =====
*/

class PERSONA{
    nombre: string;
    dirrecion: string;
}

class HERO{
    // public alter: string;
    // public edad: number;
    // public static: number;

    constructor(){
        console.log('hey');
    }
}

const iroman = new HERO();

console.log(iroman)