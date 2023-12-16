import java.util.Scanner;

public class pr_Q9
{
    static float celcius_to_fahrenheit(float n)
    {
        return (n*9.0f/5.0f)+32;
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter temperature in Celcius");
        float celcius= sc.nextFloat();
        float fahrenheit=celcius_to_fahrenheit(celcius);
        System.out.printf("%f degree celcius in fahrenheit is %f",celcius,fahrenheit);
    }
}
