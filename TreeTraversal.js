function Node(data){
    this.data=data;
    this.left=null;
    this.right=null;
}

var root= new Node('A');
var n1= new Node('B');
var n2= new Node('C');
var n3= new Node('D');
var n4= new Node('E');
//var n6= new Node('F');
//var n7= new Node('G');

root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;

function preOrderTraversal(root,nodes){
    nodes.push(root.data);
    if(root.left) preOrderTraversal(root.left, nodes);
    if (root.right) preOrderTraversal(root.right,nodes);
    return nodes;
}
function postOrderTraversal(root,nodes){
    if(root.left) postOrderTraversal(root.left,nodes);
    if(root.right) postOrderTraversal(root.right,nodes);
    nodes.push(root.data);
    return nodes;
}
function inOrderTraversal(root,nodes){
    if(root.left) inOrderTraversal(root.left,nodes);
    nodes.push(root.data);
    if(root.right) inOrderTraversal(root.right,nodes);
    return nodes;
}
function BFS(root){
    var queue=[root];
    var output=[];
    while(queue.length>0){
        var current = queue.shift();
        output.push(current.data);
        if(current.left!==null) queue.push(current.left);
        if(current.right!==null) queue.push(current.right);
        
    }
    return output;
}
var array=[];
array=preOrderTraversal(root,array);
console.log("Pre order traversal is : "+array);
array.length=0;
array=postOrderTraversal(root,array);
console.log("Post order traversal is : "  +array);
array.length=0;
array=inOrderTraversal(root,array);
console.log("in order traversal is : " +array);

array.length=0;
array=BFS(root);
console.log("BFS is "+ array);