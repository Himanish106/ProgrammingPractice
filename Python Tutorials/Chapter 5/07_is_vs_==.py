# is vs ==
fruits1 = ["Mango", "Banana", "Papaya", "Sugarcane", "Pear", "Mango"]
fruits2 = ["Banana", "Papaya", "Pear", "Mango"]
fruits3 = ["Mango", "Banana", "Papaya", "Sugarcane", "Pear", "Mango"]
print(fruits1 == fruits2)  # --> False
print(fruits1 == fruits3)  # -->True
print(fruits1 is fruits3)  # -->False

# == is used to check the equality between two objects while is used to check the equality of the memory locations of the object. Since fruits1 and fruits3 even though the elements are same but their memory locations are different so we get false as results