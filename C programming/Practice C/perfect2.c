#include<stdio.h>
void perfect(int  );
int main()
{

  int num;
  printf("Enter any number : ");
  scanf("%d", &num);
  perfect(num);
  return 0;
}
void perfect(int num)
{
  int n,sum=0,i;
  n=num;
  for(i=1; i<n; i++)
  {
     if(n%i==0)
        sum=sum+i;
  }
  if(num==sum)
     printf("%d is Perfect Number",num);
  else
     printf("%d is not Perfect Number",num);
}