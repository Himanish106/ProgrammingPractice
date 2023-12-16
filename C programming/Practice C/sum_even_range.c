#include <stdio.h>

int main()
{
    int a, b, i, sum = 0;
    printf("Enter Range\n");
    printf("Lower range=");
    scanf("%d", &a);
    printf("\n Upper Range=");
    scanf("%d", &b);
    for (i = a; i <= b; i++)
    {
        if (i % 2 == 0)
            sum = sum + i;
    }
    printf("The sum of the numbers is = %d", sum);
    return 0;
}