public class Mdc {
    public static int calcularMdc(int numero, int numero2) {
        int maior = Math.max(numero, numero2);
        int menor = Math.min(numero, numero2);

        while (menor != 0) {
            int resto = maior % menor;
            maior = menor;
            menor = resto;
        }

        return maior;
    }
}
