#include <stdio.h>
int main()
{
    int length, breadth;
    printf("Enter Length \n");
    scanf("%d", &length);
    printf("Enter Breadth \n");
    scanf("%d",&breadth);
    int area = length * breadth;
    printf("The area of rectangle is %d \n", area);
    return 0;
}