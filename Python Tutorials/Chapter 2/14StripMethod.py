name = "              Himanish             "
dots = "............"
print(dots+name+dots)  # --> So here or job is to remove the space
print(dots + name.lstrip() + dots) # --> So here space from the left side is removed
print(dots + name.rstrip() + dots) # --> So here space from the right side is removed
print(dots + name.strip() + dots) # --> So here space from both sides are removed

# Case 2: --> We may have a case where we have spaces in between a string: For example:
name2 = "Him       anish"  # --> Our job is to remove the space in between
print(name.replace(" ", ""))
