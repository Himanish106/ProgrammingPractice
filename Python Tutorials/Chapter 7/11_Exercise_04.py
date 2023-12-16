# Write a Python program that takes a dictionary as input, and returns a new dictionary with the keys and values swapped. The program should not modify the original dictionary.

# For example, if the input dictionary is {'apple': 3, 'banana': 6, 'cherry': 9}, the program should return the new dictionary {3: 'apple', 6: 'banana', 9: 'cherry'}.

dict1={'banana':6,'cherry':9,'apple':3}
swapped_dict={}
for key,values in dict1.items():
    swapped_dict[values]=key  

print(swapped_dict)