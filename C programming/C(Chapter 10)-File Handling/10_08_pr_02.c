#include <stdio.h>

int main()
{
    FILE *ptr;
    int num, i;
    printf("Enter the number you want to find multiplication table of\n");
    scanf("%d", &num);
    ptr = fopen("table.txt", "w");
    for (i = 0; i <= 12; i++)
    {
        fprintf(ptr,"%d x %d = %d", num, i, (num * i));
        fprintf(ptr,"\n");
    }
    fclose(ptr);
    return 0;
}