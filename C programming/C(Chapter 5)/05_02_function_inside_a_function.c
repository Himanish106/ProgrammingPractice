#include <stdio.h>
//Function Prototypes
void Good_Morning();
void Good_Afternoon();
void Good_Night();
int main()
{
    printf("Printing Phases of a day \n");
    //Function Call
    Good_Morning();
    return 0;
}
//Function Display
void Good_Morning()
{
    printf("Good Morning! \n");
    Good_Afternoon();
}
void Good_Afternoon()
{
    printf("Good Afternoon! \n");
    Good_Night();
}
void Good_Night()
{
    printf("Good Night! \n");
}
