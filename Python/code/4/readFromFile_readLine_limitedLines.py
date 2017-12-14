# reading from a file

# a function to read file
def read_dollar_menu():
    # open the file , with read mode
    dollar_spam = open ('dollar_menuReadFromThis.txt', 'r')
    # read from the file 1 LINE AT A TIME
    print('1st line: ' + dollar_spam.readline())
    print('2nd line: ' + dollar_spam.readline())
    dollar_spam.close()

read_dollar_menu()