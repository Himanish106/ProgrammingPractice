#include <stdio.h>
#include <string.h>
#include <stdlib.h>
struct employee
{
    int code;
    float salary;
    char name[20];
};
struct employee facebook[100];
int main()
{
    char *name1;
    printf("Enter the name\n");
    gets(name1);
    facebook[0].code = 250;
    facebook[0].salary = 2564.32;
    strcpy(facebook[0].name, name1);
    printf("%d\n %.2f\n %s\n", facebook[0].code, facebook[0].salary, facebook[0].name);
    facebook[1].code = 251;
    facebook[1].salary = 65200.32;

    strcpy(facebook[1].name, "Himanish Das");
    for (int i = 0; i <= 1; i++)
        printf("%d\n %.2f\n %s", facebook[i].code, facebook[i].salary, facebook[i].name);
    return 0;
}