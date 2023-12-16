public class multidimensional_arrays {
    public static void main(String[] args) {
        int [][] flats;
        flats=new int[2][3];
        flats[0][0]=101;
        flats[0][1]=102;
        flats[0][2]=103;
        flats[1][0]=104;
        flats[1][1]=105;
        flats[1][2]=106;
        System.out.println("Displaying the 2-D array using for loop");
        for (int[] flat : flats) {
            for (int i : flat) {
                System.out.print(i);
                System.out.print(" ");
            }
            System.out.println("");
        }
    }
}
