# Take dictionary input from user
keys1 = (input("Enter the keys for dictionary1:").split(","))
values1 = input("Enter the values for dictionary1:").split(",")
dictionary = dict(zip(keys1, values1))
sum = 0
for i in dictionary.values():
    sum = sum+int(i)

print(sum)
