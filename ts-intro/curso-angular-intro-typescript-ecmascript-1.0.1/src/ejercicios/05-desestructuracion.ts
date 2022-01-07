

console.log('Hola Munda!');

/*
    ===== Código de TypeScript =====
*/
interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles{
    autor: string,
    anio: number
}

const reproductor: Reproductor={
    volumen:90,
    segundo: 16,
    cancion: 'Mess',
    detalles: {
        autor:'Ed Sheeran',
        anio:2015
    }
}

const {volumen, segundo, cancion, detalles}=reproductor;
const {autor}=detalles;

const dbz: string[]=['Goku','Vegeta','Trunks'];
const [ , ,p3]=dbz;

console.log('Personaje:',p3);