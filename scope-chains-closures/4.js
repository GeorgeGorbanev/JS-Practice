function foo() {
  var bar;
  quux = 'assign';
  function zip(){
    var quux = 'assign another';
    bar = true;
  }
  return zip;
}
