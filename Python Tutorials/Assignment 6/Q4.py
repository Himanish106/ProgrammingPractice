# Write a program to count the number of occurrences of any item from the tuple with a function count_occurrences. (Take tuple input from the user)

def count_occurences(t1, item):
    count = 0
    for i in t1:
        if item == i:
            count = count+1
    return f"The occurence of {item} is {count}"


t1 = tuple(input("Enter the elements in a tuple seperated by comma:").split(","))
item_in_tuple = input("Enter the item in a tuple to find the occurence:")
print(count_occurences(t1, item_in_tuple))
