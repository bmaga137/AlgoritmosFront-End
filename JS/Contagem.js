function contarInteirosNoIntervalo(dados, n) {
    if (!Array.isArray(dados) || dados.length === 0) {
        return 0;
    }

    const primeiroDado = dados[0];
    const limiteInferior = Math.min(primeiroDado, n);
    const limiteSuperior = Math.max(primeiroDado, n);

    return dados.filter((valor) =>
        Number.isInteger(valor) &&
        valor >= limiteInferior &&
        valor <= limiteSuperior
    ).length;
}

const conjunto = [3, 5, 7, 8, 10, 12, 15];
const n = 15;

console.log(`Valores inteiros entre ${conjunto[0]} e ${n}: ${contarInteirosNoIntervalo(conjunto, n)}`);