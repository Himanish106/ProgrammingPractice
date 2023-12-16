#include <stdio.h>
int sum(int a, int b)
{
    int sum;
    sum = a + b;
    return sum;
}
int subtraction(int a, int b)
{
    int subtract;
    subtract = a - b;
    return subtract;
}
int multiplication(int a, int b)
{
    int multiply;
    multiply = a * b;
    return multiply;
}
float division(float a, float b)
{
    float div;
    div = a / b;
    return div;
}
int main()
{
    int x, y, result;
    float result2;
    char ch;
    printf("Enter 2 numbers and a character \n");
    scanf("%d %d %c", &x,&y,&ch);
    if (ch == '+')
    {
        result = sum(x, y);
        printf("%d\n", result);
    }
    else if (ch == '-')
    {
        result = subtraction(x, y);
        printf("%d\n", result);
    }
    else

        if (ch == '*')
    {
        result = multiplication(x, y);
        printf("%d\n", result);
    }
    else if (ch == '/')
    {
        result2 = division(x, y);
        printf("%f\n", result2);
    }
    return 0;
}