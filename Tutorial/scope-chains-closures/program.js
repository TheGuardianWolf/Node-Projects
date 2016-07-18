function foo() {
  var bar;
  quux = 10;
  function zip() {
    var quux = 0;
    bar = true;
  }
  return zip;
}
