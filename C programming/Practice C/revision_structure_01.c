#include<stdio.h>
#include<string.h>
struct employee{
    int code;
    int salary;
    char name[20];
};
int main()
{
    struct employee e1;
    e1.code=100;
    e1.salary=90000;
    strcpy(e1.name,"Himanish Das");
    printf("%d\n",e1.code);
    printf("%d\n",e1.salary);
    printf("%s",e1.name);
    return 0;
}