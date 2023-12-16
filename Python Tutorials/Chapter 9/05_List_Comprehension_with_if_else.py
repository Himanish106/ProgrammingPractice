# list comprehension with if else
# Take a list from 1 to 10 and multiply the even numbers with 2 and set odd numbers to -1

# Normal Method:

numbers = list(range(1, 11))
new_list = []
for i in numbers:
    if i % 2 == 0:
        new_list.append(i*2)
    else:
        new_list.append(-i)
print(new_list)


# Using List Comprehension
new_list2 = [i*2 if i % 2 == 0 else -i for i in numbers]
print(new_list2)
