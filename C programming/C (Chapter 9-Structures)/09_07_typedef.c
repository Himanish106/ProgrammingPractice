#include <stdio.h>
#include <string.h>
typedef struct employee
{
    int code;
    float salary;
    char name[20];
}emp;
void show(emp emp1)
{
    printf("The code of the employee is %d\n", emp1.code);
    printf("The salary of the employee is %.2f\n", emp1.salary);
    printf("The name of the employee is %s\n", emp1.name);
    emp1.code=256;
}
int main()
{
    emp e1;
    emp *ptr;
    ptr = &e1;
    ptr->code = 100;
    ptr->salary = 1500.32;
    strcpy(ptr->name, "Shubham");
    show(e1);
    printf("%d",e1.code);//There will be no change in the value as we have done call by address
    return 0;
}