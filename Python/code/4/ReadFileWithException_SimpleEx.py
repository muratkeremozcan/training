try:
    file = open('sales.txt', 'r')
    print(file.read())
except:
    print("File doesn't exist")