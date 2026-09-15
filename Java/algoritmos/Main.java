import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Fibonacci fibonacci = new Fibonacci();
        System.out.println("Fibonacci: " + fibonacci.gerarSequencia(10));

        System.out.println("MDC: " + Mdc.calcularMdc(24, 18));

        Ordenacao ordenacao = new Ordenacao();
        int[] numeros = {9, 4, 7, 2, 1, 8, 6, 3, 5};
        System.out.println("Ordenação: " + Arrays.toString(ordenacao.quickSort(numeros)));

        Primos primos = new Primos();
        System.out.printf("Primo:  %b%n", primos.isPrimo(10));

        Somatorio somatorio = new Somatorio();
        somatorio.adicionarLista(Arrays.asList(1, 2, 3, 4, 5, 6));
        somatorio.adicionarLista(Arrays.asList(7, 8, 9, 10, 11, 12));
        System.out.printf("Soma: %d%n", somatorio.somatorio());

        Contagem contagem = new Contagem();
        List<Integer> conjunto = Arrays.asList(3, 5, 7, 8, 10, 12, 15);
        System.out.printf("Contagem: %d%n", contagem.contarInteirosNoIntervalo(conjunto, 12));
    }
}
