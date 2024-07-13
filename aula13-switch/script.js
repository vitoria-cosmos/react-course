// Switch

// x = 2;

// switch (x) {
//     case 0:
//         alert('O x vale 0!');
//         break;
//     case 1:
//         alert('O x vale 1!');
//         break;
//     case 2:
//         alert('O x vale 2!');
//         break;

// }

document.write('</br> Escolha seu pedido: </br>');
document.write('</br> 0 - Sorvete / 1 - Suco </br>');
document.write('</br> 2 - Coca cola / 3 - Água gelada </br></br>');

function pedir() {
    x = prompt('O que deseja pedir?');

    switch(x) {
        case '0':
            alert('Você pediu sorvete!');
            break;
        case '1': 
            alert('Você pediu suco!');
            break;
        case '2':
            alert('Você pediu uma coca cola!');
            break;
        case '3':
            alert('Você pediu uma água gelada!');
            break;
        default:
            alert('Não temos essa opção!');
            break;
    }

}