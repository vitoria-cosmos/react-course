function cadastroPessoa(info) {
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '86027173'
    };

    return novosDados;
}

console.log(cadastroPessoa({ nome: 'Vitoria', sobrenome: 'Cosmo', anoInicio: 2024}));
