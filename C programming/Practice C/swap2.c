#include <stdio.h>
int swap(int a, int b);
int main()
{
    int x, y;
    printf("enter x,y\n");
    scanf("%d %d", &x, &y);
    swap(x, y);
    printf("x=%d,y=%d\n", x, y);
    return 0;
}
int swap(int a, int b)
{
    a = a + b;
    b = a - b;
    a = a - b;
    printf("Numbers after swapping a=%d,b=%d", a, b);
}