# Take a list of list as an input and print how many lists are present inside the list

def count_list(list1):
    count = 0
    for i in list1:
        if type(i) == list:
            count += 1
    return count


list1 = [1, 2, 3, [5, 3, 'Hello', 9], 10,
         11, None, [1, "hii", True], [13, 14, 15]]
print(count_list(list1))
