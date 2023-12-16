#include<stdio.h>

int main(){
    FILE *ptr;
    // fgetc demo for reading a file
    // ptr=fopen("getc_demo.txt","r");
    // char c=fgetc(ptr);
    // printf("The value of my character is %c\n",fgetc(ptr));
    // printf("The value of my character is %c\n",fgetc(ptr));
    // printf("The value of my character is %c\n",fgetc(ptr));
    // printf("The value of my character is %c\n",fgetc(ptr));
    // printf("The value of my character is %c\n",fgetc(ptr));
    // printf("The value of my character is %c\n",fgetc(ptr));
    // printf("The value of my character is %c\n",fgetc(ptr));
    // printf("The value of my character is %c\n",fgetc(ptr));
    // printf("The value of my character is %c\n",fgetc(ptr));
    // printf("The value of my character is %c\n",fgetc(ptr));
    ptr=fopen("putc_demo.txt","w");
    fputc('a',ptr);
    fputc('b',ptr);
    fputc('c',ptr);
    fputc('d',ptr);
    return 0;
}