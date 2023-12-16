// Write a Program to store the string "United Kingdom" in the array country and display the string under various
// format specifications
#include <stdio.h>

int main()
{
    char country[15] = "United Kingdom";
    printf("\n\n");
    printf("*123456789012345*\n");
    printf("-----\n");
    printf("%15s\n", country);
    printf("%5s\n", country);
    printf("%15.6s\n", country);
    printf("%-15.6s\n", country);
    printf("%15.0s\n", country);
    printf("%.3s\n", country);
    return 0;
}