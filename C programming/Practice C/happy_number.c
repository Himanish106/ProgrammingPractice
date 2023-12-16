#include <stdio.h>

int main()
{
    int num, sum, rem, temp;
    printf("Enter a number\n");
    scanf("%d", &num);
    temp = num;
    while (sum != 1 && sum != 4)
    {
         sum = 0;
        while (num != 0)
        {
            rem = num % 10;
            sum = sum + (rem * rem);
            num = num / 10;
        }
        num = sum;
    }
    if (sum == 1)
        printf("%d is a Happy Number", temp);
    else
        printf("%d is not a Happy Number", temp);
    return 0;
}