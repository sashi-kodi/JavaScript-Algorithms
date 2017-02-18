function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  // your code here
    string = this.parenthesize(this.getAreaCode());
    string+= this.getExchangeCode()+'-'+ this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
    return this.slice(0,3);
    
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
    return this.slice(3,6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
    var end = this.numbers.length;
    return this.slice(6,end);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

var pf = new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]);
console.log(pf.render());