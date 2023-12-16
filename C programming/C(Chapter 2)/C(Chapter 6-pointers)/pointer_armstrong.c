#include <stdio.h>
#include <math.h>
void Armstrong(int *num);
int main()
{
    int num;
    printf("Enter a number to check whether the number is an armstrong number or not\n");
    scanf("%d", &num);
    Armstrong(&num);
}
void Armstrong(int *num)
{
    int temp1, temp2, count = 0, remainder;
    temp1 = *num;
    while (temp1 != 0)
    {
        temp1 = temp1 / 10;
        count++;
    }
    temp2 = *num;
    int armstrong = 0;
    while (temp2 != 0)
    {
        remainder = temp2 % 10;
        armstrong = armstrong + pow(remainder, count);
        temp2 = temp2 / 10;
    }
    if (armstrong == *num)
        printf("%d is an armstrong number\n", *num);
    else
        printf("%d is not an armstrong number\n", *num);
}