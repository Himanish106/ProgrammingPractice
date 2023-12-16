def divide(a,b):
    try:
        divison=a/b
    except ZeroDivisionError:
        print("Error as you cannot enter the divisor as 0.")
    except TypeError as typ:
        print(typ)
    except:
        print("Unexpected error occurs.")
    else:
        return f"The result is {divison}"
    finally:
        print("Thanks for using this function...")

print(divide(10,2))
print(divide(10,0))
print(divide(10,'2'))