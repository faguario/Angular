

console.log('Hola Munda!');

/*
    ===== Código de TypeScript =====
*/
export interface Producto {
    desc: string,
    precio: number,
}

const telefono: Producto ={
    desc: 'iPad Air',
    precio:350
}

const tableta: Producto ={
    desc: 'iPad Air',
    precio:350
}

function calculaISV(productos: Producto[]): [number,number]{
    let total=0;

    productos.forEach(({precio})=>{
        total += precio;

    })
    return[total,total *0.15];
}

const articulos = [telefono, tableta];

const [total, isv]=calculaISV( articulos);

console.log("Total",total);
console.log('ISV',isv);