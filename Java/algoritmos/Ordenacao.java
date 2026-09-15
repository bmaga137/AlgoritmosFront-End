import java.util.Arrays;

public class Ordenacao {
    public int[] quickSort(int[] array) {
        if (array == null || array.length <= 1) {
            return array;
        }

        int pivot = array[array.length - 1];
        int[] left = new int[array.length];
        int[] right = new int[array.length];
        int leftSize = 0;
        int rightSize = 0;

        for (int i = 0; i < array.length - 1; i++) {
            if (array[i] < pivot) {
                left[leftSize++] = array[i];
            } else {
                right[rightSize++] = array[i];
            }
        }

        int[] sortedLeft = quickSort(Arrays.copyOf(left, leftSize));
        int[] sortedRight = quickSort(Arrays.copyOf(right, rightSize));
        int[] resultado = new int[sortedLeft.length + 1 + sortedRight.length];

        System.arraycopy(sortedLeft, 0, resultado, 0, sortedLeft.length);
        resultado[sortedLeft.length] = pivot;
        System.arraycopy(sortedRight, 0, resultado, sortedLeft.length + 1, sortedRight.length);

        return resultado;
    }
}
