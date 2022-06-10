// Javascript Aula 47 - Faixa de Preço (Atividade)
// objetivo é criar um array de objeto de faiza de preço para ser usado em site
// faixas, tooltip, minimo, máximo
 // Opção por (Factory Function)

 function criaFaixaPreco(tooltip,minimo,maximo){
     return {
         tooltip,
         minimo,
         maximo
     }
 }

 let faixas2 = [
     criaFaixaPreco('a,1,100'),
     criaFaixaPreco('b,100,1000'),
     criaFaixaPreco('c, 100,1000'),
 ]

 //segunda opção (Construtor Function)

 function FaixaPreco(tooltip,minimo,maximo){
     this.tooltip = tooltip,
     this.minimo = minimo,
     this.maximo = maximo
 }

 let faixa3 = [
     new FaixaPreco('d',10,20),
     new FaixaPreco('e', 20,30),
     new FaixaPreco('f', 30,40)
 ];

 console.log(faixas);
 console.log(faixas2);
 console.log(faixa3);
