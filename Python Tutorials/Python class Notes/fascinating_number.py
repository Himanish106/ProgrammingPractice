num = int(input("Enter 1st number:"))
mul1, mul2 = num*2, num*3
concat_nums = str(num)+str(mul1)+str(mul2)
found = True
for i in range(1, 9):
    count = 0
    for j in range(len(concat_nums)):
        if str(i) == concat_nums[j]:
            count = count+1
    if count > 1 or count == 0:
        found = False
        break
if found:
    print(num, " is a fascinating number")
else:
    print(num, " is not a fascinating number")
