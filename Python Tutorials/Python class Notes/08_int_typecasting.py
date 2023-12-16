# We already know typecasting. Here we will discuss some important points about typecasting to int
print(int("10"))  # ----> 10. Valid
# print(int("10.25"))  ----> ValueError: invalid literal for int() with base 10: '10.25'
# If we want to convert str type into int type, compulsorily str should contain only integral values and should be specified in base 10
# print(int("ten")) Error ---> ValueError: invalid literal for int() with base 10: '10.25'
print(int(0B1111)) #---> Valid
# print(int("0B1111")) ----> Error:- ValueError: invalid literal for int() with base 10: '10.25'