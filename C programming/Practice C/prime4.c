#include <stdio.h>
int chk_prime(int num);
int main()
{ int n,check_prime;
printf("Enter number\n");
scanf("%d",&n);
check_prime=chk_prime(n);
 if(check_prime==1)
 printf("%d is prime",n);
 else
 printf("%d is not prime",n);    
    return 0;
}
int chk_prime(int num)
{
    int i, c = 0;
    for (i = 1; i <= num; i++)
    {
        if (num % i == 0)
            c++;
    }
     if(c==2)
            return 1;
            else
            return -1;
}