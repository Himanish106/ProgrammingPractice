// A #define directive could be used to replace even an entire c statement
#include <stdio.h>
#define TRUE printf("\n The no is even");
#define FALSE printf("\n The no is ODD");
int main()
{
    int num;
    printf("Enter a number\n");
    scanf("%d", &num);
    if (num % 2 == 0)
        TRUE 
        else 
        FALSE 
        return 0;
}