
// SOME EVERY

// some
let nomes = ['Matheus', 'Lucas', 'Henrique', 'Maria'];

console.log(nomes.some(nome => nome === 'Maria'));


// every

let nomes2 = [
    {nome: 'Matheus', idade: 18},
    {nome: 'Maria', idade: 25},
    {nome: 'Henrique', idade: 15}
];

console.log(nomes2.every(nome => nome.idade >= 18));

if(nomes2.every(nome => nome.idade >= 18)) {
    console.log('TODOS SÃO MAIORES DE 18...');
} else {
    console.log('OPS, ALGUÉM É DE MENOR...');
}