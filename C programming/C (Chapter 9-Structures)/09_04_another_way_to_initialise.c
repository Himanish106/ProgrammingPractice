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
    struct employee initialise = {100, 325.4, "Himanish"};
    printf("Code is :%d\n", initialise.code);
    printf("Salary is: %.1f\n", initialise.salary);
    printf("Name is:%s", initialise.name);
}