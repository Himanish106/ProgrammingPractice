#include <stdio.h>

int main()
{
    FILE *ptr;
    int num1, num2, num3;
    ptr = fopen("pr_01.txt", "r");
    fscanf(ptr, "%d %d %d", &num1, &num2, &num3);
    fclose(ptr);
    printf("The numbers are %d %d %d respectively\n", num1, num2, num3);
    return 0;
}