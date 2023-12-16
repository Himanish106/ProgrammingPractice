def func(names, **kwargs):
    if kwargs.get('reverse_str') == True:
        return [(i[::-1]).title() for i in names]


names = ['harshit', 'mohit']
print(func(names, reverse_str=True))
