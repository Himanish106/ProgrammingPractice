#include <stdio.h>

int main()
{
    int i, j, a, b, c;
    printf("Enter start and end value\n");
    scanf("%d %d", &a, &b);
    i=a;
    while(i<=b)
    {
        c = 0;
        for (j = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                c++;
                break;
            }
        }
        if (c == 0 && i != 1)
            printf("%d\n", i);
    }
    return 0;
}