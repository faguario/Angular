

console.log('Hola Munda!');

/*
    ===== Código de TypeScript =====
*/
interface SuperHero{
    nombre: string,
    edad: number,
    direccion: Direccion,
    mostrarDireccion: () => string;
}

interface Direccion{
    calle: string,
    pais: string,
    ciudad: string;
}

const superHero: SuperHero ={
    nombre: 'Poncho',
    edad: 28,
    direccion:{
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ',' + this.direccion.ciudad + ',' + this.direccion.pais;
    }

}

const direccion = superHero.mostrarDireccion();
console.log(direccion);
