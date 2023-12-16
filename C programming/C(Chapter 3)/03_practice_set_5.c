// Write a program to determine whether a character entered by the user is lowercase or not
#include <stdio.h>
int main()
{
    // 97-122=a-z
    char ch;
    printf("Enter the Character \n");
    scanf("%c", &ch);
    if (ch >= 97 && ch <= 122)
    {
        printf("It is in lowercase \n");
    }
    else
    {
        printf(" It is not in lowercase \n ");
    }
    return 0;
}