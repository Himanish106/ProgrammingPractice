#include <stdio.h>
#define ISDIGIT(y) ((y >= 48 && y <= 57))
int main()
{
    char ch;
    printf("Enter any Digit\n");
    scanf("%c", &ch);
    if ((ISDIGIT(ch)))
        printf("You Entered a Digit\n");
    else
        printf(" ILLEGAL \n");
    return 0;
}