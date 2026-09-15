const prompt = require('prompt-sync')();

function isPrimo(n){
    const numero = parseInt(prompt("Digite um número para verificar se é primo: "));
    let divisores = 0;
    for (let i = 1; i <= numero; i++){
        if(numero%i == 0){
            divisores++;
        }
    }
    if(divisores == 2){
        console.log(`O número ${numero} é primo`);
        return true;
    }
    else{
        console.log(`O número ${numero} não é primo`);
        return false
    }
}


isPrimo();