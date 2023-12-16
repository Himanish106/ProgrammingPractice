// The macros that we have used so far are called simple macros. Macros can have arguments just as functions can
#include<stdio.h>
# define AREA(x) (3.14*x*x)
int main()
{
    float r1=6.25,r2=2.5,a;
    a= AREA(r1);
    printf("AREA of circle 1 = %f",a);
    a= AREA(r2);
    printf("AREA of circle 2 = %f",a);
    return 0;
}