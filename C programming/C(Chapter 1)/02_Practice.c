#include <stdio.h>
int main()
{
    int radius, height;
    float pi = 3.14;
    printf("Enter Radius \n");
    scanf("%d", &radius);
    printf("Enter height \n");
    scanf("%d", &height);
    printf("The volume of the cylinder is %f\n", pi * radius * radius * height);
    return 0;
}