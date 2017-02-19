function Queue(){
    this.head=null;
    this.tail=null;
    this.storage=[];
}
Queue.prototype.enqueue = function(data){
    if(this.head=== null){
        this.head=0;
        this.tail=0;
    }
    else{
        this.tail++;
        
    }
    this.storage[this.tail]=data;
    
}
Queue.prototype.dequeue = function(){
    var item;
    if(this.head===this.tail) {
        console.log ('queue is empty');
    }
    else{
        item = this.storage[this.head];
        this.head++;
    }
    return item;
}

Queue.prototype.printAll= function(){
    console.log('####');
    for(var i=this.head;i<=this.tail;i++){
        console.log(this.storage[i]+'-->');
    }
}

var q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(35);
q.printAll();
console.log("element removed is " +q.dequeue());
console.log("element removed is " +q.dequeue());
q.enqueue(40);
q.enqueue(50);
console.log("element removed is " +q.dequeue());
q.printAll();