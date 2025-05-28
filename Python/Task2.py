import json 

with open('testFile.json', 'r') as test_file:
    data = json.load(test_file)

    lists = data['lists']

    for i in range (len(lists)):

        print (data['lists'][i]['id'])