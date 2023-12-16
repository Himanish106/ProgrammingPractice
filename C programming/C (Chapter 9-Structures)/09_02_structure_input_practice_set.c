// Write a program to store details of 3 employees from user defined data type.Use the structure declared above
#include <stdio.h>
#include <string.h>
struct employee
{
    int code;
    float salary;
    char name[20];
};

int main()
{
    struct employee e1, e2, e3;
    printf("Enter the code number of the employee\n");
    scanf("%d", &e1.code);
    printf("Enter the salary of the employee\n");
    scanf("%f", &e1.salary);
    fflush(stdin);
    printf("Enter the name of the employee\n");
    gets(e1.name);
    printf("Enter the code number of the employee\n");
    scanf("%d", &e2.code);
    printf("Enter the salary of the employee\n");
    scanf("%f", &e2.salary);
    fflush(stdin);
    printf("Enter the name of the employee\n");
    gets(e2.name);
    printf("Enter the code number of the employee\n");
    scanf("%d", &e3.code);
    fflush(stdin);
    printf("Enter the salary of the employee\n");
    scanf("%f", &e3.salary);
    printf("Enter the name of the employee\n");
    fflush(stdin);
    gets(e3.name);
    return 0;
}