#include <stdio.h>
void swap(int a,int b);
int main()
{
    int a,b;
    printf("Enter 2 numbers to be swapped\n");
    scanf("%d %d",&a,&b);
    swap(a,b);
    return 0;
}
void swap(int a,int b)
{
    int t;
    t=a;
    a=b;
    b=t;
    printf("Value of a=%d and b=%d after swapping",a,b);
}
