//this program will merge two sorted linked lists
function LinkedList(){
    this.head=null;
}
LinkedList.prototype.add = function(item){
    var node={data: item, next:null};
    
    if(!this.head) {
        //1st element in the list
        this.head=node;
    }
    else{
        current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=node;
    }
}

LinkedList.prototype.print =function(){
    console.log('#######');
    var current = this.head;
    while(current){
        console.log(current.data+ '->>');
        current=current.next;
    }
}

var ll=  new LinkedList();
ll.add(1);
ll.add(2);
ll.add(7);
ll.print();

var ll2=  new LinkedList();
ll2.add(1);
ll2.add(3);
ll2.add(5);
ll2.print();

var newlist=mergeTwoLists(ll,ll2);
newlist.print();

function mergeTwoLists(l1,l2){
    var newlist = new LinkedList();
    var cur1,cur2;
    cur1=l1.head;
    cur2=l2.head;
    
    while(cur1 && cur2){
        if(cur1.data<cur2.data){
            newlist.add(cur1.data);
            cur1=cur1.next;
        }
        else{
            
            if(cur1.data=== cur2.data){
               newlist.add(cur1.data);
               cur1=cur1.next; 
                cur2=cur2.next;
            }
            else{
                newlist.add(cur2.data);
            cur2=cur2.next;
            }
            
        }
    }
    
    while(cur1){
        newlist.add(cur1.data);
        cur1=cur1.next;
    }
    
    while(cur2){
        newlist.add(cur2.data);
        cur2=cur2.next;
    }
    
    return newlist;
    
}
