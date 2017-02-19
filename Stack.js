function Stack(){
    this.top=null;
    this.storage=[];
}
Stack.prototype.push = function(data){
    if(this.top=== null) 
          this.top=0;
    else 
          this.top++;
    this.storage[this.top]=data;
    
}
Stack.prototype.pop = function(){
    if(this.top>=0){
      var item = this.storage.pop();
      
        this.top--;
        return item;  
    }
    else {
        console.log("stack is empty.");
    }
}
Stack.prototype.peek = function(){
    var item = this.storage[this.top];
    return item;
}
Stack.prototype.printAll = function(){
    for(var i=0;i<this.storage.length;i++){
        
          console.log(this.storage[i]+'-->');
    }
}
var stack = new Stack();
stack.push(1);
stack.push(20);
stack.push(40);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
stack.push(3);
stack.push(5);
stack.printAll();