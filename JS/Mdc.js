const prompt = require('prompt-sync')();

function MDC(){
    const numero = parseInt(prompt("Digite o primeiro número: "));
    const numero2 = parseInt(prompt("Digite o segundo número: "));

    let maior = numero;
    let menor = numero2;

    if(numero < numero2){
        maior = numero2;
        menor = numero;
    }

    while (menor !== 0) {
        let resto = maior % menor;
        maior = menor;
        menor = resto;
    }
    
    return maior;
}


console.log(MDC());