#include <stdio.h>
int main()
{
    float celsius, far;
    printf("enter temperature in celsius \n");
    scanf("%f", &celsius);
    far = (celsius * 9 / 5) + 32;
printf("The temperature in Fahrenheit is %f \n",far);
}