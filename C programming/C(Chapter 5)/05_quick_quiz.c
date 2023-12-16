#include<stdio.h>
//Function Prototypes
void Good_Morning();
void Good_Afternoon();
void Good_Night();
int main()
{
    printf("Printing Phases of a day \n");
    //Function Call
    Good_Morning();
    Good_Afternoon();
    Good_Night();
    return 0;
}
//Function Display
void Good_Morning()
{
    printf("Good Morning! \n");
}
void Good_Afternoon()
{
    printf("Good Afternoon! \n");
}
void Good_Night()
{
    printf("Good Night! \n");
}
