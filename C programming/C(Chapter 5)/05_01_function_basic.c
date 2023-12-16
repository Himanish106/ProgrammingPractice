#include<stdio.h>
void display();//Function Prototype
int main()//main function
{
int a;
printf("Initializing display Function \n");
display();//Function Call
printf("Display Function finishes its work \n");
    return 0;
}
//Function Definition
    void display()
    {
        printf("This is display \n");
    }