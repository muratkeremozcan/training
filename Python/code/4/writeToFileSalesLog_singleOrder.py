

# a function to write to file
def write_sales_log(order):  
    file = open('salesSingleOrder.txt', 'w') #open the file for writing

    total = 0

    for item, price in order.items(): # loop through each key&value pair (item&price) in the dictionary
        file.write(item + ' ' + format(price, '.2f') + '\n')
        total += price
    
    file.write('total = ' + format(total, '.2f') + '\n' )
    
    file.close()

# the main function writes the order by calling the write to file function 
def main():
    order = {'Cheeky Spam': 1.0, 'Yonks Spam': 4.0}
    write_sales_log(order)

main()