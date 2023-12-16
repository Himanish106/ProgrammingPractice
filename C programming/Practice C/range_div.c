#include <stdio.h>

int main()
{
    int a1, a2, i;
    printf("Enter start value\n");
    scanf("%d", &a1);
    printf("Enter end value\n");
    scanf("%d", &a2);
    for (i = a1; i <= a2; i++)
    {
        if (i % 3 == 0 || i % 5 == 0)
            printf("%d\n", i);
    }
    return 0;
}