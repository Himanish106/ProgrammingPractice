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
    struct employee e1;
    e1.code = 100;
    e1.salary = 2501.32;
    // e1.name="Himanish";----> Won't work
    strcpy(e1.name, "Himanish");
    printf("%d\n", e1.code);
    printf("%.2f\n", e1.salary);
    printf("%s\n", e1.name);
    return 0;
}