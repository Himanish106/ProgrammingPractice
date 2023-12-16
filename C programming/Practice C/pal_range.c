#include <stdio.h>
int main()
{
  int i, a, b, t1, remainder, reverse;
  printf("Enter range\n");
  scanf("%d %d", &a,&b);
  printf("The palindrome numbers are\n");
  for (i = a; i <= b; i++)
  {
    t1 = i;
    reverse = 0;
    while (t1!=0)
    {
      remainder = t1 % 10;
      reverse = reverse * 10 + remainder;
      t1=t1/10;
    }
    if (i == reverse)
    {
      printf("%d\n", i);
    }
  }
  return 0;
}