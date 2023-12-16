#include <stdio.h>
#include <string.h>
struct employee
{
    char name[20];
    int age;
    float salary;
};
int main()
{
    struct employee e1 = {"Sanjay Maharshi", 30, 5500.50};
    struct employee e2, e3;
    // e2.name=e1.name;---> Since it is a character type array we cannot use assignment operator
    strcpy(e2.name, e1.name);
    e2.age = e1.age;
    e2.salary = e1.salary;
    e3 = e2;
    printf("%s\n %d\n %.2f\n", e1.name, e1.age, e1.salary);
    printf("%s\n %d\n %.2f\n", e2.name, e2.age, e2.salary);
    printf("%s\n %d\n %.2f\n", e3.name, e3.age, e3.salary);
    return 0;
}