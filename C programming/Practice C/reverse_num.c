#include <stdio.h>

int main()
{
    int reverse = 0, remainder, num, t;
    printf("Enter a number\n");
    scanf("%d", &num);
    t = num;
    while (num != 0)
    {
        remainder = num % 10;
        reverse = reverse * 10 + remainder;
        num = num / 10;
    }
    printf("%d after reverse is %d", t, reverse);
    return 0;
}