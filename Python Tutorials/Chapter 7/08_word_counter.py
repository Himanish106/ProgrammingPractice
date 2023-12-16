def word_counter(s):
    count = {}
    for character in s:
        count[character] = s.count(character)

    return count


print(word_counter('himanish'))
