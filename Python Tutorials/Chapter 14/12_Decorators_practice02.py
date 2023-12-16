# def add_all(*args):
#     total = 0
#     for i in args:
#         total += i
#     return total


# print(add_all(1, 2, 3, 4, *[1, 2, 3, 4]))----> So we had already learned before how we can unpack list tuples or dictionary with the help of * operator.If we had not given a star we get an error. But let us define a decorator that only accepts those arguments that are integers. We will not be using * here

from functools import wraps


def only_int_allow(function):
    @wraps(function)
    def wrapper(*args):
        # data_type = []
        # for arg in args:
        #     data_type.append(type(arg) == int)
        # if all(data_type):
        #     return function(*args)
        # else:
        #     return "Invalid arguments"
        if all([type(arg) == int for arg in args]):
            return function(*args)
        return "Invalid arguments"
    return wrapper


@only_int_allow
def add_all(*args):
    total = 0
    for i in args:
        total += i
    return total


print(add_all(1, 2, 3, 4, [1, 2, 3, 4]))  # --> Invalid Arguments
