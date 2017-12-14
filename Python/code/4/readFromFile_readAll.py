# reading from a file

# open the file , with read mode
dollar_spam = open ('dollar_menuReadFromThis.txt', 'r')
# read from the file
print(dollar_spam.read())
#close
dollar_spam.close()