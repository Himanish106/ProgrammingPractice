// WAP to calculate the sum of numbers occuring in the multiplication table of 8.(consider 8x1 to 8x12)
#include<stdio.h>
int main()
{
    int n,mul,sum=0;
    printf("Enter n \n");
    scanf("%d",&n);
    for(int i=1; i<=n; i++)
    {
        mul=i*8;
        sum=sum+mul;
    }
      printf("The sum of first 12 multiples of 8= %d ",sum);
    return 0;
}