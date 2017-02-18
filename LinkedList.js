function LinkedList(){
    this.head=null;
}
LinkedList.prototype.print = function(){
    console.log('#######');
    var current = this.head;
    while(current){
        console.log(current.data+'-->');
        current=current.next;
    }
}
LinkedList.prototype.search = function(val){
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
LinkedList.prototype.add = function(value){
    var linkedobj ={data:value, next:null};
    if(this.head){
        var current = this.head;
        while(current.next){
            current=current.next;
        }
        current.next=linkedobj;
    }
    else{
        this.head=linkedobj;    
    }
}

LinkedList.prototype.remove = function(val){
    
    
   var found=this.search(val);
    if(!found){
        return 'item not present in the linkedlist';
    }
    else{
        var current = this.head;
        var prev=null;
        while(current){
            if(current.data=== val){
                if(current=== this.head){
                  this.head=current.next;  
                }
                else{
                 prev.next=current.next;
                 break;  
                }
               
            }
            prev=current;
            current=current.next;
        }
        
        
    }
    
}

LinkedList.prototype.findMiddle = function(){
    
    var current=this.head;
    var currentTwo =this.head;
    while(currentTwo.next){
        current=current.next;
        currentTwo=currentTwo.next.next;
    }
    
    
    return current.data;
}

function reverse(list){
    var nodes=[];
    if(!list.head) return list;
    if(!list.head.next) return list;
    
    var current=list.head;
    while(current){
        nodes.push(current);
        current = current.next;
    }
    
    var newlist = new LinkedList();
    newlist.head=nodes.pop();
    current=newlist.head;
    node=nodes.pop();
    while(node){
        current.next=node;
        node.next=null;
        current=current.next;
        node=nodes.pop();
    }
    
    return newlist;
}

//LinkedList.prototype.add = function(val){
//    var node = {
//       value: val,
//       next: null
//    }
//    if(!this.head){
//      this.head = node;      
//    }
//    else{
//      current = this.head;
//      while(current.next){
//        current = current.next;
//      }
//      current.next = node;
//    }
//  }
var linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print();
console.log(linkedlist.findMiddle());
var newlinkedlist=reverse(linkedlist);
newlinkedlist.print();
//console.log(linkedlist.search(10));
//linkedlist.remove(2);
//linkedlist.print();
//linkedlist.add(2);
//linkedlist.add(222);
//linkedlist.print();
//linkedlist.remove(1);
//linkedlist.print();
//linkedlist.remove(222);
//linkedlist.print();