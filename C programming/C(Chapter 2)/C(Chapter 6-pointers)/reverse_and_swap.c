#include <stdio.h>
void reverse_digits(int *a, int *b);
void swap(int *a, int *b);
int main()
{
    int a, b;
    printf("Enter 2 numbers\n");
    scanf("%d", &a);
    scanf("%d", &b);
    printf("Numbers before reverse a=%d and b=%d\n", a, b);
    reverse_digits(&a, &b);
    printf("The numbers after reverse a=%d and b=%d\n", a, b);
    swap(&a, &b);
    printf("Numbers after swapping a=%d and b=%d", a, b);
    return 0;
}
void reverse_digits(int *a, int *b)
{
    int reverse1 = 0;
    int reverse2 = 0;
    while (*a != 0)
    {
        int remainder_1 = *a % 10;
        reverse1 = reverse1 * 10 + remainder_1;
        *a = *a / 10;
    }
    *a = reverse1;
    while (*b != 0)
    {
        int remainder_2 = *b % 10;
        reverse2 = reverse2 * 10 + remainder_2;
        *b = *b / 10;
    }
    *b = reverse2;
}
void swap(int *a, int *b)
{
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}