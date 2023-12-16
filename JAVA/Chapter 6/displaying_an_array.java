public class displaying_an_array {
    public static void main(String[] args) {
        int [] marks={100,78,80,92,95};
        // Naive way to display an array
        System.out.println(marks[0]);
        System.out.println(marks[1]);
        System.out.println(marks[2]);
        System.out.println(marks[3]);
        System.out.println(marks[4]);
//        Displaying the array using for loop
        System.out.println("Printing using for loop");
        for (int i=0; i<marks.length; i++)
            System.out.println(marks[i]);

//        Displaying the array using for each loop
        System.out.println("Printing using for each loop");
        for (int element:marks)
        {
            System.out.println(element);
        }
    }
}
