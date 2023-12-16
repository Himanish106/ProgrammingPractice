n = eval(input("Enter the range of the series:"))
first_term = 0
second_term = 1
print(f"{first_term}, {second_term}", end="")
for i in range(2, n+1):
    sum = first_term+second_term
    print(",", sum, end="")
    first_term = second_term
    second_term = sum
