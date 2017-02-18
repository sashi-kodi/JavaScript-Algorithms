function DoubleLinkedList(){
    this.head=null;
}
DoubleLinkedList.prototype.print = function(){
    console.log('#######');
    var current = this.head;
    while(current){
        console.log(current.data+'-->');
        current=current.next;
    }
}
DoubleLinkedList.prototype.search = function(val){
    var flag=false;
    var current = this.head;
    while(current){
        if(current.data=== val){
            flag=true;
            break;
        }
        current=current.next;
    }
    
    return flag;
}
DoubleLinkedList.prototype.add = function(value){
    var linkedobj ={data:value, next:null,prev:null};
    if(this.head){
        var current = this.head;
        while(current.next){
            current=current.next;
        }
        current.next=linkedobj;
        linkedobj.prev=current;
    }
    else{
        this.head=linkedobj;    
    }
}

DoubleLinkedList.prototype.remove = function(val){
    
    
   var found=this.search(val);
    if(!found){
        return 'item not present in the linkedlist';
    }
    else{
        var current = this.head;
        var previtem=null;
        while(current){
            if(current.data=== val){
                if(current=== this.head){
                  this.head=current.next;  
                    current.next.prev=null;
                }
                else{
                 previtem.next=current.next;
                    if(current.next) {current.next.prev=previtem;}
                 break;  
                }
               
            }
            previtem=current;
            current=current.next;
        }
        
        
    }
    
}


var dlinkedlist = new DoubleLinkedList();
dlinkedlist.add(1);
dlinkedlist.add(2);
dlinkedlist.add(3);
dlinkedlist.print();
console.log(dlinkedlist.search(10));
dlinkedlist.remove(2);
dlinkedlist.print();
dlinkedlist.add(2);
dlinkedlist.add(222);
dlinkedlist.print();
dlinkedlist.remove(1);
dlinkedlist.print();
dlinkedlist.remove(222);
dlinkedlist.print();