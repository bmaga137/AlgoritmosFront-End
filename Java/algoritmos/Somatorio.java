import java.util.ArrayList;
import java.util.List;

public class Somatorio {
    private final List<Integer> listaSoma = new ArrayList<>();

    public void adicionarLista(List<Integer> lista) {
        this.listaSoma.addAll(lista);
    }

    public void adicionarNumero(int numero) {
        this.listaSoma.add(numero);
    }

    public void removerNumero(int numero) {
        this.listaSoma.remove(Integer.valueOf(numero));
    }

    public int somatorio() {
        int soma = 0;
        for (int numero : this.listaSoma) {
            soma += numero;
        }
        return soma;
    }
}
