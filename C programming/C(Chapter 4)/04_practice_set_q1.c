// Write a program to print the multiplication table of a given number n.
#include<stdio.h>
int main()
{
    int n,n1,multiple;
    printf("Enter n and n1 \n");
    scanf("%d %d",&n,&n1);
    for(int i=0; i<=n1; i++)
    {
        multiple=i*n;
        printf("%d= %d * %d \n",multiple,n,i);
    }
    return 0;
}