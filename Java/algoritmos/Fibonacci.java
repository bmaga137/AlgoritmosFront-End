import java.util.ArrayList;
import java.util.List;

public class Fibonacci {
    public List<Integer> gerarSequencia(int quantidade) {
        if (quantidade <= 1) {
            return new ArrayList<>();
        }

        List<Integer> sequencia = new ArrayList<>();
        sequencia.add(0);
        sequencia.add(1);

        for (int i = 2; i < quantidade; i++) {
            sequencia.add(sequencia.get(i - 1) + sequencia.get(i - 2));
        }

        return sequencia;
    }
}
