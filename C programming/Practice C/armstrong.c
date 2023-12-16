#include <stdio.h>
#include <math.h>
int main()
{
    int num, sum = 0, t1, t2, count = 0, remainder;
    printf("Enter a number\n");
    scanf("%d", &num);
    t1 = num;
    while (t1 != 0)
    {
        t1 = t1 / 10;
        count++;
    }
    t2 = num;
    while (t2 != 0)
    {
        remainder = t2 % 10;
        sum = sum + pow(remainder, count);
        t2 = t2 / 10;
    }
    if (sum == num)
        printf("%d is armstrong number", num);
    else
        printf("%d is not armstrong number", num);
    return 0;
}