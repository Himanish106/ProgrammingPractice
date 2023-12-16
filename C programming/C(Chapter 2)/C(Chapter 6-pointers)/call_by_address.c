#include <stdio.h>
void wrong_swap(int a, int b);
void correct_swap(int *a, int *b);
int main()
{
    int x = 3, y = 4;
    printf("The value of x and y before swapping is x=%d and y=%d\n", x, y);
    wrong_swap(x, y); // Will not work due to call by value
    // correct_swap(&x, &y); // Will work due to call by address
    printf("The value of x and y after swapping is x=%d and y=%d\n", x, y);
    return 0;
}
void wrong_swap(int a, int b)
{
    int temp;
    temp = a;
    a = b;
    b = a;
}
void correct_swap(int *a, int *b)
{
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}
