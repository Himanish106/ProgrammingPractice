t1 = tuple(input("Enter the elements in the tuple1:").split(","))
t2 = tuple(input("Enter the elements in the tuple2:").split(","))
print("Before swapping t1:", t1)
print("Before swapping t2:", t2)
t1, t2 = t2, t1
print("After swapping t1:", t1)
print("After swapping t2:", t2)
