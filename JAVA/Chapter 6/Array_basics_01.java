public class Array_basics_01 {
    public static void main(String[] args) {

    /*
    Classroom of 500 students - You have to store marks of these 500 students
    You have 2 options:-
         1) Create 500 variables
         2) Use Arrays (Recommended)
    */
//        There are 3 ways to create an array in java
//        int[] marks = new int[5]; // Declaration + Memory Allocation
//        int[] marks; // First Declaration
//        marks=new int[5]; // Then initialization
//        marks[0] = 100;
//        marks[1] = 78;
//        marks[2] = 80;
//        marks[3] = 92;
//        marks[4] = 95;
//        marks[4]= 99; // Array element can be overwritten
//        marks[5] = 89; --> Will throw an error as array elements out of bound
        int [] marks={100,78,80,92,95}; // Declare + initialize
//        You may think why size is not mentioned. Java itself determines the size
        System.out.println(marks[4]);
    }
}
