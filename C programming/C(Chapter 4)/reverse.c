#include <stdio.h>
void main()
{
    int num, reverse = 0, remainder;
    printf("enter number \n");
    scanf("%d", &num);
    while (num != 0)
    {
        remainder = num % 10;
        reverse = reverse * 10 + remainder;
        num = num / 10;
    }
    if (num == reverse)
    {
        printf("%d is a Palindrome Number", num);
    }
    else
    {
        printf("%d is not a palindrome number", num);
    }
}