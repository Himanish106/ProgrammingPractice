import java.util.Random;
import java.util.Scanner;

public class rock_paper_scissor {
    public static void main(String[] args) {
//        0 for rock
//        1 for paper
//        2 for scissor
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter 0 for rock, 1 for paper, 2 for scissor");
        int userInput=sc.nextInt();
        Random random=new Random();
        int computerInput= random.nextInt(3);
        // This bound means a random number is being generated from 0 to 2
        if (userInput==computerInput)
        {
            System.out.println("Draw");
        }
        if (userInput==0 && computerInput==2 || userInput==1 && computerInput==0 || userInput==2 && computerInput==1)
        {
            System.out.println("You win");
        }
        else {
            System.out.println("Computer win");
        }
        if (computerInput==0)
        {
            System.out.println("Computer choose rock");
        }
        if(computerInput==1)
        {
            System.out.println("Computer choose paper");
        }
        if (computerInput==2)
        {
            System.out.println("Computer choose scissor");
        }
    }
}
