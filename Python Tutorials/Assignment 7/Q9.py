keys1 = (input("Enter the keys for dictionary1:").split(","))
values1 = input("Enter the values for dictionary1:").split(",")
dictionary1 = dict(zip(keys1, values1))
sorted_dict = {key: dictionary1[key] for key in sorted(dictionary1)}
print(sorted_dict)
