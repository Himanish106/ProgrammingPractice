#include <stdio.h>
#include <string.h>
struct employee
{
    int code;
    char name[20];
    float salary;
};
int main()
{
    struct employee e1, e2, e3;
    printf("Entering details of 1st employee\n");
    printf("Enter the employee code: ");
    scanf("%d", &e1.code);
    fflush(stdin);
    printf("Enter the employee name: ");
    gets(e1.name);
    printf("Enter the employee salary: ");
    scanf("%f", &e1.salary);
    printf("Entering details of 2nd employee\n");
    printf("Enter the employee code: ");
    scanf("%d", &e2.code);
    fflush(stdin);
    printf("Enter the employee name: ");
    gets(e2.name);
    printf("Enter the employee salary: ");
    scanf("%f", &e2.salary);
    printf("Entering details of 3rd employee\n");
    printf("Enter the employee code: ");
    scanf("%d", &e3.code);
    fflush(stdin);
    printf("Enter the employee name: ");
    gets(e3.name);
    printf("Enter the employee salary: ");
    scanf("%f", &e3.salary);
    return 0;
}