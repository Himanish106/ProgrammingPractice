#include <stdio.h>

int main()
{
    int a, b, c;
    printf("Enter a and b \n");
    scanf("%d %d", &a, &b);
    c = a;
    a = b;
    b = c;
    printf("Value of a=%d and b=%d after swapping", a, b);
    return 0;
}