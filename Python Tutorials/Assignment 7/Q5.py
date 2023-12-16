t = tuple(input("Enter the elements in the tuple:").split(","))
if all(i == t[0] for i in t):
    print("All are same")
else:
    print("All are not same")
