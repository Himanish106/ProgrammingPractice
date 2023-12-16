# kwargs (Keyword Arguments)
# **kwargs(double star operation)

# kwargs as a parameter
def func(**kwargs):
    print(kwargs)
    print(type(kwargs))  # ---> class dict
    for k, v in kwargs.items():
        print(f"{k}:{v}")


func(first_name='Himanish', last_name='Das')
# func(a=10+30)
# Difference between args and kargs is args use to convert the data into a tuple and kargs use to convert the data into dictionary

# Dictionary Unpacking
d = {'name': 'Himanish', 'age': 24}
func(**d)
