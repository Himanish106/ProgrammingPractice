list = []
n = int(input("Enter the range of the list:"))
for i in range(0, n):
    # Declaring empty list inside a list
    choice = int(input(
        "Press 1 to create a list inside a list else 0 to enter elements inside a list:"))
    if choice == 1:
        tempList = []
        tempList = input("\nEnter elements:").split(",")
        list.append(tempList)
    elif choice == 0:
        element = int(input(f"Element {i}="))
        list.append(element)
    else:
        print("Wrong Choice")
print(list)
