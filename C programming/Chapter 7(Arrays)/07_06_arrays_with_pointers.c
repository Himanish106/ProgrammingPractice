#include <stdio.h>

int main()
{
    int marks[5], i;
    int *ptr;
    // ptr = &marks[0];
    ptr = marks;
    for (i = 0; i < 5; i++)
    {
        // ptr = &marks[i];
        printf("Enter the value of marks for student %d\n", i + 1);
        scanf("%d", ptr);
        printf("%u\n", ptr);
         ptr++;
        // printf("%u\n", ptr);
    }
    for (i = 0; i < 5; i++)
    {
        // ptr = &marks[i];
        ptr=marks;
        printf("The value of marks for student %d is %d at address %u \n", i + 1, *(ptr+i), (ptr+i));
    }
    return 0;
}