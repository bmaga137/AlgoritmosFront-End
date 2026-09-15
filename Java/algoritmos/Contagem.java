import java.util.List;

public class Contagem {
    public int contarInteirosNoIntervalo(List<Integer> dados, int n) {
        if (dados == null || dados.isEmpty()) {
            return 0;
        }

        int primeiroDado = dados.get(0);
        int limiteInferior = Math.min(primeiroDado, n);
        int limiteSuperior = Math.max(primeiroDado, n);
        int contador = 0;

        for (int valor : dados) {
            if (valor >= limiteInferior && valor <= limiteSuperior) {
                contador++;
            }
        }

        return contador;
    }
}
