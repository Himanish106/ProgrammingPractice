#include<stdio.h>
int main()
{
    int i=1,n,factorial=1;
    printf("Enter n \n");
    scanf("%d",&n);
    while(i<=n)
    {
        factorial=factorial*i;
        i++;
    }
    printf("The factorial of %d = %d",n,factorial);
    return 0;
}