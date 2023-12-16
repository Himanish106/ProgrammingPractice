#include <stdio.h>

int main()
{
    int num, fact, sum = 0, rem, temp, i;
    printf("Enter a Number\n");
    scanf("%d", &num);
    temp = num;
    while (num != 0)
    {
        rem = num % 10;
        fact = 1;
        for (i = 1; i <= rem; i++)
        {
            fact = fact * i;
        }
        sum = sum + fact;
        num = num / 10;
    }
    if (temp == sum)
        printf("%d is a Krishnamurty number", temp);
    else
        printf("%d is not a krishnamurty number", temp);
    return 0;
}