// Write your own version of strcpy function
#include <stdio.h>
void strcpy_clone(char source[], char target[])
{
    int i = 0;
    while (source[i] != '\0')
    {
        target[i] = source[i];
        i++;
    }
    target[i] = '\0';
}
int main()
{
    char source[30];
    char target[30];
    printf("Enter Source String\n");
    gets(source);
    strcpy_clone(source, target);
    printf("The targetted string is %s", target);
    return 0;
}