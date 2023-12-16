# Write a Python program that takes a list of numbers as input and outputs the sum of all the even numbers in the list. If there are no even numbers in the list, the program should output a message saying so.

my_list = [1, 5, 8, 12, 7, 3, 10, 21]
sum=0
count=0
for i in my_list:
    if i%2==0:
        sum=sum+i
        count=count+1

if count==0:
    print("There are no even numbers in the list")
else:
    print(f"The sum of the numbers are:{sum}")