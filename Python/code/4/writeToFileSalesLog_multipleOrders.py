

# a function to write to file
def write_sales_log(order):  
    file = open('salesMultipleOrders.txt', 'a') # in order to not overwrite to the same file, we append and add to it

    total = 0

    for item, price in order.items(): # loop through each key&value pair (item&price) in the dictionary
        file.write(item + ' ' + format(price, '.2f') + '\n')
        total += price
    
    file.write('total = ' + format(total, '.2f') + '\n\n' )
    # some other ways of writing integer to a file
    #file.write('%d' % total)  
    #file.write (format(total))             
    #file.write ('{}'.format(total) + '\n')
    file.close()

# the main function writes the order by calling the write to file function 
def main():
    order = {'Cheeky Spam': 1.0, 'Yonks Spam': 4.0}
    write_sales_log(order)
    order2 = {'Cheerio Spam': 1.0, 'Smashing Spam': 3.0}
    write_sales_log(order2)

main()