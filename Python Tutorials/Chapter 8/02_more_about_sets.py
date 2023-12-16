# in keyword in sets and loop

s = {'a', 'b', 'c'}
if 'a' in s:
    print("Present")
else:
    print("Absent")
# for loop
for item in s:
    print(item)
# So if we print this loop we will see the order of elements are not maintained as sets are unordered

s1 = {1, 2, 3, 4, 5, 6}
s2 = {3, 4, 5, 6}
# union_set = s1.union(s2)
union_set = s1 | s2 # ---> "|"-> This is the pipe operator. You can use either use union method or pipe operator
print(union_set)

# intersection_set = s1.intersection(s2)
intersection_set = s1 & s2 #---> For intersection you can follow any of those methods
print(intersection_set)
