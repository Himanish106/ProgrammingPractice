#include<stdio.h>
int i;
void main()
{
	static int i=5;
	if(--i)
	main();
	printf("%d",i);
}
