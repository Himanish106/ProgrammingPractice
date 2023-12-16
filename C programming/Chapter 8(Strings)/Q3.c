// Write a program to copy one string into another and count the number of characters copied
#include <stdio.h>

int main()
{
    char string1[50], string2[50];
    int i;
    printf("Enter a string\n");
    gets(string1);
    for (i = 0; string1[i] != '\0'; i++)
        string2[i] = string1[i];
    string2[i] = '\0';
    printf("%s\n", string2);
    printf("Number of characters=%d\n", i);
    return 0;
}