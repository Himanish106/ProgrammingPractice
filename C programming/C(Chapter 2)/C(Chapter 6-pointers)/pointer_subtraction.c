#include <stdio.h>
void subtraction(int num1, int num2, int *subtraction)
{
    *subtraction = num1 - num2;
}
int main()
{
    int num1, num2, subtract;
    printf("Enter 2 numbers to Subtract\n");
    scanf("%d %d", &num1, &num2);
    subtraction(num1, num2, &subtract);
    printf("The number after subtraction is=%d", subtract);
}