#include <stdio.h>
int main()
{
     int i = 0;
//     printf("enter value of i \n");----> This code works only when we are taking user input
//     scanf("%d", &i);
//     while (i >= 10 && i <= 20)
//     {
//         printf("%d\n ", i);
//         i++;
//     }
//     return 0;
// }
while(i<=20)
{
    if(i>=10)
    {
        printf("The value of i is %d \n",i);
    }
    i++;
}
return 0;
}