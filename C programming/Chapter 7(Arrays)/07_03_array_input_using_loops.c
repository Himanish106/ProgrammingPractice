#include <stdio.h>

int main()
{
//     int marks[5], i;
//     for (i = 0; i < 5; i++)
//     {
//         printf("Enter the marks of student : %d  ", i + 1);
//         scanf("%d", &marks[i]);
//     }
//     for (i = 0; i < 5; i++)
//     {
//         printf("The value of marks for student %d is : %d\n", i + 1, marks[i]);
//     }
//     return 0;
// }
int arr[100],i,n;
printf("Enter the number of students\n",n);
scanf("%d",&n);
for(i=0; i<n; i++)
{
    printf("Enter the marks of student %d\n",i+1);
    scanf("%d",&arr[i]);
}
for(i=0; i<n; i++)
{
    printf("The marks of student %d is %d\n",i+1,arr[i]);
}
return 0;
}