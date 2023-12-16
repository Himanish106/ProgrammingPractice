#include <stdio.h>
#include <math.h>
int main()
{
    int r;
    float area, perimeter;
    printf("Enter radius\n");
    scanf("%d", &r);
    area = 3.14 * pow(r, 2);
    perimeter = 2 * 3.14 * r;
    printf("The area of circle is %f and perimeter of circle is %f", area, perimeter);
    return 0;
}