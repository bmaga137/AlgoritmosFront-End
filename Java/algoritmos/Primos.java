public class Primos {
    public boolean isPrimo(int numero) {
        if (numero < 2) {
            return false;
        }

        int divisores = 0;
        for (int i = 1; i <= numero; i++) {
            if (numero % i == 0) {
                divisores++;
            }
        }

        return divisores == 2;
    }
}
