package CollectionFrameworks;

import java.util.HashMap;
public class Map {

    public static void main(String[] args) {
        HashMap<String, Integer> courses = new HashMap<>(); // String, Integer refers to key,value
        courses.put("Core Java", 4000);
        courses.put("Advance Java", 7000);
        courses.put("Mern", 8000);
        courses.put("Spring", 9000);
        courses.put("Spring", 10000);
        System.out.println(courses);
        System.out.println("************************************************");
        courses.forEach((key,value)->{
            System.out.print(key);
            System.out.print("=>");
            System.out.println(value);
            System.out.println();
        });
    }
}
