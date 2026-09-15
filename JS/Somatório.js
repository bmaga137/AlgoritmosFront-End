var listaSoma = [];

function Somatorio(){
    let soma = 0;
    for (let i = 0; i < listaSoma.length; i++){
        soma = soma + listaSoma[i]
    }
    return soma;
}

function adicionarLista(lista){
    listaSoma = [...listaSoma, ...lista]

    return listaSoma;
}

function adicionarNumero(numero){
    listaSoma[listaSoma.length + 1] = numero;
}

function removerNumero(numero){
    let index = listaSoma.indexOf(numero)

    if(index > -1){
        listaSoma.splice(index, 1);
    }
}

var lista1 = [1, 2, 3, 4, 5, 6]
var lista2 = [7, 8, 9, 10, 11, 12]

adicionarLista(lista1)
adicionarLista(lista2)

console.log(Somatorio())