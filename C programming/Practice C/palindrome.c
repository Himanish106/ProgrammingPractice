#include <stdio.h>

int main()
{
    int num, reverse = 0, r, t;
    printf("Enter a number\n");
    scanf("%d", &num);
    t = num;
    while (t != 0)
    {
        r = t % 10;
        reverse = reverse * 10 + r;
        t = t / 10;
    }
    if (num == reverse)
        printf("%d is palindrome", num);
    else
        printf("%d is not palindrome", num);
    return 0;
}