#include <stdio.h>
void call_by_reference(int *);
int main()
{
    int n;
    printf("Enter the value of the variable\n");
    scanf("%d", &n);
    printf("Value of n before multiplying=%d\n",n);
    call_by_reference(&n);
    printf("Value after multiplying by 10 = %d\n", n);
    return 0;
}
void call_by_reference(int *ptr)
{
    *ptr = *ptr * 10;
}