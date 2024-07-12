
// função entrar
function entrar() {
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome:'); 

    if (texto == '' || texto == null) {
        alert('Digite seu nome novamente');
        area.innerHTML = 'Bem vindo(a)...';
    } else {
        area.innerHTML = 'Bem vindo(a), ' + texto;
    }
}

function entrar2(nome) {
    var area = document.getElementById('area2');
    var texto = prompt('Digite seu sobrenome:'); 

    area.innerHTML = nome + ' ' + texto;

}

function entrar3(nome, sobrenome) {   
    const area3 = document.getElementById('area3');
    const idade = prompt('Qual sua idade?');
    area3.innerHTML = `Bem vindo(a), ${nome} ${sobrenome}, ${idade}`;

    

}