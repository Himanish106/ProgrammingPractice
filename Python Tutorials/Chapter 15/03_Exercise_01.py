# Define a Generator Function
# Take one number as argument
# generate a sequence of even numbers from 1 to that number

def even_num(num):
    for num in range(1, num+1):
        if num % 2 == 0:
            yield num


numbers = even_num(10)
for i in numbers:
    print(i)

for i in numbers:
    print(i) 

for i in even_num(10): #---> But if you write the loop like this you can call it multiple times as we are calling the function itself
    print(i)

for i in even_num(10):
    print(i)

# But when we were calling a function inside a number variable then inside the number variable the numbers has been generated already once.So again when we were calling the same function again then we were not getting any output. But in the second case where we have called the function again in the for loop statement then we were getting output multiple times because each and everytime the generator is being called