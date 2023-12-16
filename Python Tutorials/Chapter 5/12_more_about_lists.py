# 1) Generate lists with range functions
numbers = list(range(1, 11))  # -----> Generates a list from 1 to 10
print(numbers)

# 2) More about pop method----> We know pop method if index is not specified deletes the last element from the lists. But that value is not lost completely. pop method returns the value. We can store it in a new variable in case we require it later

print(numbers.pop()) # ----> Since its last value is 10 is popped the value is returned here and we can store it in a seperate variable.

# 3) index() method ----> Returns the index of a particular element. We can also mention the start index and the stop index
print(numbers.index(5))  # -----> It returns 4 as 5 is present at index 4

numbers1 = [2, 5, 7, 10, 5, 3, 8, 5, 9, 5, 3, 2, 5]
print(numbers1.index(5)) # ----> 1, As index method returns the index of the first occurence of the element if start index is not mentioned.
print(numbers1.index(5, 2))  # ---->4, As we have started from 2nd index
print(numbers1.index(5, 5, 9)) # ---->7, As we have our start index=5 and stop index is 9

# NOTE: Stop index means list is counted upto stopIndex-1

# 4) Pass list to a function


def negative_list(l):
    negative = []
    for i in l:
        negative.append(-i)
    return negative


numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(negative_list(numbers2))
