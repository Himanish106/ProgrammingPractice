sum = 0
count = 0
for i in range(1, 100):
    if i % 6 == 0 and i % 4 != 0:
        sum = sum+i
        count += 1

print("The sum of such digits are", sum,
      "and total number of such numbers =", count)
