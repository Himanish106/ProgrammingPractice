#include <stdio.h>
#include <math.h>
int main()
{
    // printf("The remainder of 5 when divide by 2 is %d \n",5%2);
    // printf("The remainder of 5 when divide by 2 is %d \n",-5%2);
    // printf("The remainder of 5 when divide by 2 is %d \n",-5%2);
    //     No operator is assumed to be present
    //  printf("The product of 4*5 is %d \n",(4)(5));(4)(5) will not give any value as we cannot assume the operator to be present
    printf("The product of 4*5 is %d \n", (4) * (5));
    //    There is no operator to perform exponentiation in C
    //   printf("The value of 4 to the power 5 is %d \n",4^5); 4^5 will not give any output.Though the code is showing no error as ^ is a Bitwise Operator in C.
    //  printf("The value of 4 to the power 5 is %f \n",pow(4,5));
    float k = 3.0 / 9;
    printf("The value of 3.0/9 is %f", k);
    return 0;
}