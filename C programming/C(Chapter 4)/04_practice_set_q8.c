#include<stdio.h>
int main()
{
    int n,factorial=1;
    printf("Enter value of n \n");
    scanf("%d",&n);
    for(int i=1; i<=n; i++)
    {
        factorial=factorial*i;
    }
    printf("The value of factorial of %d is = %d",n,factorial);
    return 0;
}