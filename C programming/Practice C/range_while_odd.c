#include <stdio.h>

int main()
{
    int num, i;
    printf("Enter a number\n");
    scanf("%d", &num);
    i = 1;
    while (i <= num)
    {
        if (i % 2 != 0)
            printf("%d\n", i);
    }
    return 0;
}