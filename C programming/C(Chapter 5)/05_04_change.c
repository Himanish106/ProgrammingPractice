#include<stdio.h>
void change(int a);
int main(){
    int b=344;
    // printf("The value of b before changing=%d",b);
    change(b);
  printf("The value of b after changing=%d",b);
    return 0;
}
void change(int a)
{
    a=77;
}