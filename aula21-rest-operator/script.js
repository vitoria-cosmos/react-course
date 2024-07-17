// function minhaLista(nomes) {
//     console.log(nomes);
// }

// minhaLista("Matheus", "Lucas", "Joao");

// Uso do rest operator

// function minhaLista(...nomes) {
//     console.log(nomes);
// }

// minhaLista("Vitoria", "Alice", "Gabi");

// function meusNumeros(...numeros) {
//     console.log(numeros);
// }

// meusNumeros(1,2,3,4,5);

// Forma que fiz o exercicio:
/*
function cadastrar(usuarios, ...novosUsuarios) {
    console.log(usuarios, ...novosUsuarios);

    
}

let usuarios = ["Vitoria", "Gabi", "Alice"];

let novosUsuarios = cadastrar([...usuarios, "Henrique", "Lucas"]);
*/

function cadastrar(usuarios, ...novosUsuarios) {
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];

    return console.log(totalUsuarios);
}

let usuarios = ["Vitoria", "Gabi", "Alice"];

let novosUsuarios = cadastrar(usuarios, "Berg", "Samuel", "Victor", "Lucas");