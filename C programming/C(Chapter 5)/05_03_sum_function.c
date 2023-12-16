#include <stdio.h>
//Sum is a function which takes a and b as input and returns an integer as output
int sum(int a, int b); //function prototype.a & b are parameters
int main()
{
    int c=0, n1, n2;
    printf("Enter 2 numbers n1,n2\n");
    scanf("%d %d", &n1, &n2);
    sum(n1, n2); //function call
  printf("The value of sum is %d\n", c);
    return 0;
}
int sum(int a, int b)
{
    int c=0;
    c = a + b;
    return c;
}