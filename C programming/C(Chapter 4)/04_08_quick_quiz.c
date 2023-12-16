#include<stdio.h>
int main()
{
    int n;
    printf("enter the value of n \n");
    scanf("%d",&n);
    for(int i=n; i; i--) //--> i here is a non zero number.so when i becomes 0 condition becomes false.
    {
        printf("The value of i is %d \n",i);
    }
    return 0;
}