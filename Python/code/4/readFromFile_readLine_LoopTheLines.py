# reading from a file

# a function to read file
def read_dollar_menu():
    # open the file , with read mode
    dollar_spam = open ('dollar_menuReadFromThis.txt', 'r')
    # read from the file 1 LINE AT A TIME
    # instead of printing each line, add them to a list
    
    dollar_menu = []  # this is the empty list which will include each line bein read

    for eachLine in dollar_spam:
        #to fix the formatting with white space and new lines ( \n )
        eachLine = eachLine.strip()

        # if you want to print each line to the command prompt, this is what you would do
        # print (eachLine)
        
        # if you want to write to a file, this is what you would do
        dollar_menu.append(eachLine)
    
    # this would print to cmd prompt
    # print(dollar_menu)
     
    # this would write to file
    file = open('OutputReadLinesToAFile.txt', 'a')
    file.write(format(dollar_menu))



    dollar_spam.close()

read_dollar_menu()