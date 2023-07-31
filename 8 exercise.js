const myMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
]);

  for ( let key of myMap.keys() ) {
    console.log( `Ключ - ${key} , значение - ${myMap.get(key)}` )
}