// velocidade máxima de 70
// a cada 5km acima do limite você ganha 1 ponto
// Match.Floor ()
// caso pontos sejam maior que 12 -> "carteira Suspendida"

verificarVelocidade (130);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima =70;
    const KmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log ('ok');
        else {
            const pontos = Math.floor ((velocidade - velocidadeMaxima) / KmPorPonto);
            if( pontos >= 12)
            console.log('Carteira Suspensa');
            else
            console.log('Pontos',pontos);
        
        }
}