#include <stdio.h>
#include <string.h>
struct employee
{
    int code;
    char name[20];
    float salary;
};
void show(struct employee emp)
{
    printf("The code of the employee is %d\n", emp.code);
    printf("The name of the employee is %s\n", emp.name);
    printf("The salary of the employee is %f\n", emp.salary);
}
int main()
{
    struct employee e1;
    struct employee *ptr;
    ptr = &e1;
    // (*ptr).code=101;
    ptr->code = 101;
    ptr->salary = 4520.75;
    strcpy(ptr->name, "Himanish");
    show(e1);
    return 0;
}