#include <stdio.h>

int main()
{
    int size;
    int bits[32], stuffedBits[64];
    int i, j = 0, k, count;
    printf("Enter the size of the array: ");
    scanf("%d", &size);
    for (i = 0; i < size; i++)
    {
        printf("Enter the %dth bit:", i);
        scanf("%d", &bits[i]);
    }
    for (i = 0; i < size; i++)
    {
        if (bits[i] == 1)
        {
            stuffedBits[j] = bits[i];
            count = 1;
            for (k = i + 1; k < size && count < 5 && bits[k] == 1; k++, i++)
            {
                j++;
                stuffedBits[j] = bits[k];
                count++;
                if (count == 5)
                {
                    j++;
                    stuffedBits[j] = 0;
                }
                // i = k;
            }
        }
        else
        {
            stuffedBits[j] = bits[i];
        }
        j++;
    }
    printf("BitStream after Stuffing:\n");
    for (i = 0; i < j; i++)
    {
        printf("%d\t", stuffedBits[i]);
    }
    return 0;
}