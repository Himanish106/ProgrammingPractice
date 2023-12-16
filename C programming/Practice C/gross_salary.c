#include <stdio.h>

int main()
{
    int basic_salary;
    float hra, da, gross;
    printf("Enter basic salary:\n");
    scanf("%d", &basic_salary);
    if (basic_salary <= 10000)
    {
        da = basic_salary * 0.80;
        hra = basic_salary * 0.20;
    }
    else if (basic_salary <= 20000)
    {
        da = basic_salary * 0.90;
        hra = basic_salary * 0.25;
    }
    else
    {
        da = basic_salary * 0.95;
        hra = basic_salary * 0.30;
    }
    gross = basic_salary + hra + da;
    printf("Gross salary of the employee=%.2f", gross);
    return 0;
}