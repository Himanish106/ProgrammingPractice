# any,all function

numbers1 = [2, 4, 6, 8, 10]
numbers2 = [1, 2, 3, 4, 5, 6]

# If all numbers are even print True---> Normal method
flag = True
for num in numbers1:
    if num % 2 != 0:
        flag = False
        break
print(flag)

# So before implementing the all function let us understand how it works
print([num % 2 == 0 for num in numbers1]) #---> [True, True, True, True, True]. So all function is applied on this list and since here all the values are True so the final answer will be True

# Now we will implement the above program using all function
print(all([num % 2 == 0 for num in numbers1]))  # ---> True

# any function basically means if any of the value is true or false within a list tuple or anything then it returns the required result. Let us demo with an example

print(any([num % 2 == 0 for num in numbers2]))  # ---> True. Since any one value is True within this list so the overall result becomes True.