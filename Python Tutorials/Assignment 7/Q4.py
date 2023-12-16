def count_occurences(t, item):
    count = 0
    for i in t:
        if i == item:
            count = count+1
    return f"The count of {item} is {count}"


t = tuple(input("Enter the elements in the tuple:").split(","))
item = input("Enter the item to find its total occurences:")
print(count_occurences(t, item))
