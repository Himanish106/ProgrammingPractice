#include<stdio.h>
int main()
{
    int marks;
    printf("Enter Marks \n");
    scanf("%d",&marks);
    switch(marks/10)
    { 
        case 10:
        // marks is 100
        printf("Your grade is A+");
        break;
         case 9:
        //  marks from 90 to 99
         printf("your grade is A \n");
         break;
   case 8:
    case 7:
    // marks from 70 to 89
    printf("your grade is B \n");
    break;
    case 6:
    // marks from 60 to 69
    printf("your grade is C \n");
    case 5:
    case 4:
    // marks from 40 to 59
    printf("your grade is D \n");
break;
default: 
// Student failed
printf("Failed");
break;
}
return 0;
}