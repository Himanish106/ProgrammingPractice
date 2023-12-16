#include <stdio.h>
void swap_pointer(int *, int *);
int main()
{
    int a = 10, b = 20;
    printf("The value before swapping is a=%d and b=%d\n", a, b);
    swap_pointer(&a, &b);
    printf("After swapping :- a=%d b=%d", a, b);
    return 0;
}
void swap_pointer(int *x, int *y)
{
    int t;
    t = *x;
    *x = *y;
    *y = t;
}