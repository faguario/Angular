

console.log('Hola Munda!');

/*
    ===== Código de TypeScript =====
*/
let habilidaes = ['Bash','Counter','Healing'];

interface Personaje{
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string;
}

const personaje={
    nombre: 'Stider',
    hp: 100,
    habilidades: ['bash','counter','healing']
}

console.table( personaje );