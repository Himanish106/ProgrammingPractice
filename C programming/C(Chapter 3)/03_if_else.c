#include <stdio.h>
int main()
{
    int age;
    printf("enter your age\n");
    scanf("%d", &age);
    if (age >= 90)
    {
        printf("You are above 90,You cannot drive");
    }
    else
    {
        printf("You can drive");
    }

    return 0;
}