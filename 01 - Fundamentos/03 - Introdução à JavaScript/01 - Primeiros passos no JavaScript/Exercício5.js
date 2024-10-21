let peca = 'REI'.toLowerCase();

switch (peca) {
    case 'peao':
        console.log('uma casa a frente');
        
        break;

    case 'torre':
        console.log('todas as casas livres a frente e ao lado');
        
        break;
    case 'cavalo':
        console.log('movimentos em L');

        break;

    case 'bispo':
        console.log('diagonais livres');

        break;
        
    case 'dama':
        console.log('qualquer direção livre');

        break;

    case 'rei':
        console.log('qualquer direção livre uma casa por vez');

        break

    default:
        console.log('Peça inválida!!');
        
        break;
}