// We will write a program that generate a random number and asks the player to guess it.If the player's guess is higher
// than the actual number , the gram displays "Lower number please".Similarly if the user's guess is too low the
// program prints "Higher number please".
// When the user guesses the correct number,the program displays the number of guesses the player used to arrive at the 
// number.
#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int main()
{
    int number,guess,nguesses=1;
    srand(time(0));
    // number=rand();
     number=rand()%100+1; //Generates a random number between 1&100
    // printf("The number is %d \n",number);
    //keep running the loop until the number is guessed
    do
    {
        printf("Guess the number between 1&100\n");
        scanf("%d",&guess);
        if (guess>number){
            printf("Lower number please! \n");
        }
        else if(guess<number)
        {
            printf("Higher number Please!\n");
        }
        else{
            printf("You guessed it in %d attempts \n ",nguesses);
        }
       nguesses++; 

    } while (guess!=number);
    return 0;
}