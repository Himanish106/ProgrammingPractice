// Write a program using function which calculates the sum and average of 2 numbers. Use pointers and print the value of
// sum and average in main
#include <stdio.h>
void sum_And_average(int a, int b, int *sum, float *avg)
{

    *sum = a + b;
    *avg = (float)*sum / 2;
}
int main()
{
    int x = 3;
    int y = 6;
    int sum;
    float avg;
    sum_And_average(x, y, &sum, &avg);
    printf("Sum=%d and average=%.1f\n", sum, avg);
    return 0;
}