# filter odd even
# Define a function
# input
# list----> [1,2,3,4,5,6,7]
# output----->[[1,3,5,7],[2,4,6]]

def filter_odd_even(l):
    l1 = []
    l2 = []
    # l3 = []
    for i in l:
        if i % 2 == 0:
            l1.append(i)
        else:
            l2.append(i)
    # l3.append(l2)
    # l3.append(l1)
    l3 = [l1, l2]  # ----> Prefer this as using append line of code increases
    return l3


numbers = list(range(1, 8))
print(filter_odd_even(numbers))
