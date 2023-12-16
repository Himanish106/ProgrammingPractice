// A # define directive could be used even to replace a condition as shown in the program
#include <stdio.h>
#define AND &&
#define ARRANGE (a > 25 AND a < 50)
int main()
{
    int a = 30;
    if (ARRANGE)
        printf("Within range");
    else
        printf("Out of range");
    return 0;
}