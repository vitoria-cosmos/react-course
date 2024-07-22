// exemplo 1 - map
// const lista = [1, 2, 3, 4, 5, 6];

// const novaLista = lista.map(function(item) {
//     return item * 5;
// });

// console.log(novaLista);


// exemplo 2 - index

// const lista = [1, 2, 3, 4, 5, 6];

// const novaLista = lista.map(function(item, index) {
//     return item + index;
// });

// console.log(soma);

// exemplo 3 - reduce

// const lista = [1, 2, 3, 4, 5, 6];

// const soma = lista.reduce(function(total, proximo) {
//     return total + proximo;
// });

// console.log(soma);

// exemplo 4 - find

const lista = [1, 2, 3, 4, 5, 6];

const find = lista.find(function(item) {
    return item === 6;
});

console.log(find);

