# if elif else statement:
# show ticket Pricing
# 1 to 3 (free)
# 4 to 10 (150)
# 11 to 60 (250)
# above 60(300)

age = int(input("Enter age:\n"))
if age <= 0:
    print("Invalid age")
elif age > 0 and age <= 3:
    print("Ticket price: free")
elif 4 <= age <= 10:  # ---> Another way to write age>=4 and age<=10
    print("Ticket price: 150")
elif 11 <= age <= 60:
    print("Ticket price: 250")
else:
    print("Ticket price: 300")
