#include <stdio.h>

int main()
{
    FILE *ptr;
    int num,num2;
    ptr = fopen("Himanish2.txt", "r");
    fscanf(ptr, "%d", &num);
    fscanf(ptr, "%d", &num2);
    fclose(ptr);
    printf("The value of num is %d\n", num);
    printf("The value of num is %d\n", num2);
    return 0;
}