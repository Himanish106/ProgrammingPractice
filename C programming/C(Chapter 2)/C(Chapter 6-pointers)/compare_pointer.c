#include <stdio.h>

int main()
{
    int j = 77;
    int i = 8.5;
    int *ptr1 = &i;
    int *ptr2 = &j;
    if (ptr1 > ptr2)
        printf("Pointer 1 is greater than Pointer 2");
    else
        printf("Pointer 2 is greater than Pointer 1");
    return 0;
}
//
// #include <stdio.h>

// int main()
// {
//     int *ptrA,*ptrB;

//     ptrA = (int *)1;
//     ptrB = (int *)2;

//     if(ptrA > ptrB)
//         printf("PtrB is greater than ptrA");

// return(0);
// }