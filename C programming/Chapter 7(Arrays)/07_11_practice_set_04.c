// Repeat problem 3 for a general input provided by the user using scanf
#include <stdio.h>

int main()
{
    int n1, n2, i, mul[100];
    printf("Enter a number to find multiplication table of that number\n");
    scanf("%d", &n1);
    printf("Enter array range\n");
    scanf("%d", &n2);
    for (i = 0; i < n2; i++)
    {
        mul[i] = n1 * (i + 1);
    }
    for (i = 0; i < n2; i++)
    {
        printf("%d X %d = %d\n", n1, i + 1, mul[i]);
    }
    return 0;
}