// WAP to check whether a given number is prime or not using loops
#include<stdio.h>
int main()
{ 
    int n,c=0;
    printf("Enter value of n \n");
    scanf("%d",&n);
    for(int i=1; i<=n; i++)
    {
        if(n%i==0)
        {
            c++;
        }
    }
    if(c==2){
        printf("%d is Prime",n);
    }
    else{
        printf("%d is not Prime",n);
    }
    return 0;
}