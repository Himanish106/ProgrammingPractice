import java.util.Random;
import java.util.Scanner;

class Game
{
    public int number;
    public int noOfGuesses=0;
    public int InputNumber;
 Game()
{
    Random rand=new Random();
  number=rand.nextInt(100);
}

    public void setNoOfGuesses(int noOfGuesses) {
        this.noOfGuesses = noOfGuesses;
    }

    public int getNoOfGuesses() {
        return noOfGuesses;
    }

    public void takeUserInput()
{
    System.out.println("Guess the number");
    Scanner sc=new Scanner(System.in);
    InputNumber= sc.nextInt();
}

boolean isCorrectNumber()
{
noOfGuesses++;
    if (InputNumber==number)
    {
        System.out.printf("You have guessed the number %d correctly\n",number);
        System.out.printf("You have guessed it in %d attempts\n",noOfGuesses);
        return true;
    }
else if(InputNumber<number)
    {
        System.out.println("Too low...");
    } else {
        System.out.println("Too high...");
    }
    return false;
    }
}

public class Exercise
{
    public static void main(String[] args) {
        Game obj = new Game();
        boolean b = false;
        while (!b)
        {
            obj.takeUserInput();
            b=obj.isCorrectNumber();
        }
    }
}
