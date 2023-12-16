# So we know to find maximum and minimum we use max or min function

numbers = [1, 2, 3, 4, 5, 6, 7]
print(max(numbers))  # 7
print(min(numbers))  # 1
# But today we will use this functions in an advanced manner
names = ['Harshit', 'Mohit', 'Ravi']
# Now our job is to find the string with highest length using max function

# print(max(names)) Ravi---> But this is not the string with the highest length. It is returning the string at the highest index

# So let us create a function


def func(item):
    return len(item)


print(max(names, key=func))  # ---> Harshit

# Better to do that with lambda function

print(max(names, key=lambda item: len(item)))  # ---> Harshit


# Example 2
student1 = [{'name': 'Harshit', 'score': 90, 'age': 24},
            {'name': 'Mohit', 'score': 70, 'age': 19},
            {'name': 'Ravi', 'score': 60, 'age': 23}]

# Find the maximum score from this list
print(max(student1, key=lambda item: item.get('score'))['score'])

# Example 3
student2 = {'harshit': {'score': 90, 'age': 24},
            'mohit': {'score': 75, 'age': 19},
            'rohit': {'score': 76, 'age': 23}}

# Find the maximum score from this dictionary
print(max(student2, key=lambda item: student2[item]['score']))
# To only print the score
print(max(student2.values(), key=lambda item: item['score'])['score'])
