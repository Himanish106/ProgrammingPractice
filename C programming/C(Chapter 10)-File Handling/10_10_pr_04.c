// Take name and salary of 2 employees as input from the user and write them to a text file in the following format
// name1 , 3300
// name2 , 7700
#include <stdio.h>
#include <stdlib.h>
int main()
{
    FILE *ptr;
    int salary1, salary2;
    char name1[20], name2[20];
    ptr = fopen("employee.txt", "w");
    printf("Enter the name of 1st customer\n");
    gets(name1);
    printf("Enter the salary of customer 1\n");
    scanf("%d", &salary1);
    fflush(stdin);
    printf("Enter the name of 2nd customer\n");
    gets(name2);
    printf("Enter the salary of 2nd customer\n");
    scanf("%d", &salary2);
    fprintf(ptr, "%s , %d\n", name1, salary1);
    fprintf(ptr, "%s , %d", name2, salary2);
    fclose(ptr);
    return 0;
}