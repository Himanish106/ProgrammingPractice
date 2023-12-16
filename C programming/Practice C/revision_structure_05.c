#include <stdio.h>
#include <string.h>
typedef struct employee
{
    int code;
    char name[20];
    float salary;
} emp1;
void show(emp1 emp)
{
    printf("The code of the employee is %d\n", emp.code);
    printf("The name of the employee is %s\n", emp.name);
    printf("The salary of the employee is %f\n", emp.salary);
}
int main()
{
    emp1 e1;
    emp1 *ptr;
    ptr = &e1;
    // (*ptr).code=101;
    ptr->code = 101;
    ptr->salary = 4520.75;
    strcpy(ptr->name, "Himanish");
    show(e1);
    return 0;
}