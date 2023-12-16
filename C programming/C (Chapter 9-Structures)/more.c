#include <stdio.h>

struct student
{
  int roll_no;
  char name[30];
char phone_number[11];
};                                                    
struct student stud[5];
int main()
{
  int i;
  for(i=0; i<=1; i++)
    {
      printf("Student %d\n",i+1);
      printf("Enter roll no. :\n");
      scanf("%d", &stud[i].roll_no);
      fflush(stdin);
      printf("Enter name :\n");
     gets(stud[i].name);
      printf("Enter phone number :\n");
      scanf("%s", stud[i].phone_number);
    }
  for(i=0; i<=1; i++)
    {
      printf("Student %d\n",i+1);
      printf("Roll no. : %d\n", stud[i].roll_no);
      fflush(stdin);
      printf("Name : %s\n", stud[i].name);
      printf("Phone no. : %s\n", stud[i].phone_number);
    }
  return 0;
}
