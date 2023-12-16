#include <stdio.h>
int main()
{
    int i = 3;
    int *j;
    int **k;
    j = &i;
    k = &j;
    printf("The value of i is %d\n", i);
    printf("The value of i is %d\n", *j);
    printf("The address of i is %u\n", &i);
    printf("The address of i is %u\n", j);
    printf("The address of i is %u\n", *k);
    printf("The address of j is %u\n", &j);
    printf("The value of i is %d\n", *(&i));
    printf("The value of j is %d\n", j);
    printf("The address of j is %u\n", k);
    printf("The value of i will be %d\n", **k);
    printf("Address of k will be %u\n", &k);
    printf("Value of k will be %d", *(&k));
    return 0;
}