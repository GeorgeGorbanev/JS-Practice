function *upper (items) {
  for (let index = 0; index < items.length; index++)
    try {
      yield items[index].toUpperCase();
    }
    catch(error){
      yield null;
    }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
    console.log(item);
}
