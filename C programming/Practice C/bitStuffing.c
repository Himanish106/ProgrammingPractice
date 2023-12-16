#include <stdio.h>

int main()
{
    int bits[32], stuffedBits[64];
    int i, j = 0, k, count;
    int size;
    printf("Enter the size of the bitstream: ");
    scanf("%d", &size);
    // Inputting the data bits
    for (i = 0; i < size; i++)
    {
        printf("Enter the %dth bit: ", i + 1);
        scanf("%d", &bits[i]);
    }
    // Bit Stuffing
    for (i = 0; i < size; i++)
    {
        if (bits[i] == 1)
        {
            count = 1;
            stuffedBits[j] = bits[i];
            for (k = i + 1; bits[k] == 1 && k < size && count < 5; k++)
            {
                j++;
                stuffedBits[j] = bits[k];
                count++;
                // Stuff a 0 after 5 consequtive bits
                if (count == 5)
                {
                    j++;
                    stuffedBits[j] = 0;
                }
                i = k;
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