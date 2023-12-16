# To use all kinds of parameter in a single function that is args,kargs,default,or normal parameters we have an order

# The order is:PADK
# Parameters
# Args
# Default
# Kargs

def func(name, *args, last_name='unknown', **kargs):
    print(name)
    print(args)
    print(last_name)
    print(kargs)


func("Himanish", 1, 2, 3, a=1, b=2)
# Very rarely we use all four together but whenever you use this maybe you use 2 or 3 only then you must maintain your order