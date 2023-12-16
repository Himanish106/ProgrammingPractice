list = []
n = int(input("Enter the range of the list:"))
for i in range(0, n):
    # Declaring empty list inside a list
    tempList = []
    tempList = input("\nEnter elements:").split(",")
    list.append(tempList)
print(list)
