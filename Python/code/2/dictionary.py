slang = {'cheerio':'goodbye', 'knackered':'tired', 'yonks':'ages'}
menu = {'spam meal':15, 10:'hello'}
print(slang['cheerio'])
print(menu['spam meal'])
print(menu[10])

#add values
slang['smashing'] = 'terrific'
slang['knackered'] = 'tiredMod'
print (slang)

#delete
del slang['cheerio']
print (slang)

#get an item
getmethat = slang.get('yonks')
print (getmethat)
getmethat = slang.get('bloody') #doesn't exist
if(getmethat):                  #only print if it exists
    print (getmethat)