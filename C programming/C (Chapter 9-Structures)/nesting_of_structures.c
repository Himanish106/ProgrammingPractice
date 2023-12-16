#include<stdio.h>
struct address{
        char phone[15];
        char city[20];
        int pin;
    };
    struct emp
    {
        char name[25];
        struct address a;
    };
int main(){
    struct emp e={"jeru","531046","Nagpur",10};
    printf("name=%s,phone=%s\n",e.name,e.a.phone);
    printf("city=%s,pin=%d\n",e.a.city,e.a.pin);
    return 0;
}