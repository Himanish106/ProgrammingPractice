// Write a program to print the number of vowels and consonants in a string
#include <stdio.h>

int main()
{
    char str[100];
    int vowel = 0, consonats = 0, i;
    printf("Enter a String:-");
    gets(str);
    for (i = 0; str[i] != '\0'; i++)
    {
        if (str[i] == 'A' || str[i] == 'a' || str[i] == 'E' || str[i] == 'e' || str[i] == 'O' || str[i] == 'o' || str[i] == 'I' || str[i] == 'i' || str[i] == 'U' || str[i] == 'u')
            vowel++;
        else
            consonats++;
    }
    printf("The number of vowels is %d and number of consonants is %d", vowel, consonats);
    return 0;
}