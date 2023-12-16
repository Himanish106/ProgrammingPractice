// Write a program to modify a file containing an integer and double its value
#include <stdio.h>

int main()
{
    FILE *ptr;
    int num;
    ptr = fopen("c.txt", "r");
    fscanf(ptr, "%d", &num);
    ptr = fopen("c.txt", "w");
    fprintf(ptr, "%d", num * 2);
    return 0;
}