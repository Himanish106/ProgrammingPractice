#include <stdio.h>
int main()
{
    int angle_1, angle_2, angle_3, sum;
    printf("Enter 3 angles\n");
    scanf("%d %d %d", &angle_1, &angle_2, &angle_3);
    sum = angle_1 + angle_2 + angle_3;
    if (sum == 180 && angle_1 > 0 && angle_2 > 0 && angle_3 > 0)
        printf("Traingle is valid");
    else
        printf("Traingle is not valid");
    return 0;
}