#include <stdio.h>

int main()
{
    int num, r, sum = 0;
    printf("Enter a number\n");
    scanf("%d", &num);
    while (num != 0)
    {
        r = num % 10;
        sum = sum + r;
        num = num / 10;
    }
    printf("The sum of digits are %d\n", sum);
    return 0;
}