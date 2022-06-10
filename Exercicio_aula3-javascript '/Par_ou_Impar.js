// Preencher uma quantidade de valores para avaliar
// função exibe se cada valor é par ou impar

exibirTipo(5);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++){
        if (i % 2 === 0)
        console.log('Par');
        else
        console.log('Impar');
    }

}