# Common elements finder function
# define a function which take 2 lists as input and return a list which contains common elements of both the lists


def common(l1, l2):
    l3 = []
    for i in range(len(l1)):
        for j in range(len(l2)):
            if l1[i] == l2[j]:
                l3.append(l1[i])
    return l3


list1 = [1, 2, 5, 8]
list2 = [1, 2, 7, 6]
print(common(list1, list2))

# 2) Logic 2 ---> Prefer this method


def common_finder(l1, l2):
    output = []
    for i in l1:
        if i in l2:
            output.append(i)
    return output


print(common_finder([1, 2, 5, 8], [1, 2, 7, 6]))
