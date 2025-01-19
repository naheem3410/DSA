class TNode{
    val: number|undefined
    left: TNode | undefined
    right: TNode | undefined
    constructor(val?:number,left?:TNode,right?:TNode){
        this.val = val
        this.left = left
        this.right = right
    }

}

class BinaryTree{
    head: TNode | undefined
    queue:TNode[] = []

    insert(node: TNode){
        if(!this.head){
            this.head = node
            this.queue.push(this.head)
            return
        }

        this.insertNode(this.queue[0],node)
    }

    insertNode(node: TNode, item: TNode){
        if(!node.left){
            node.left = item
            this.queue.push(node.left)
            return
        }

        if(!node.right){
            node.right = item
            this.queue.push(node.right)
            this.queue.shift()
            return
        }

    }

    print(){
        if(!this.head){
            console.log("Tree empty")
            return
        }
        this.traverse(this.head)
    }

    traverse(node:TNode){
        if(node){
            console.log(node.val)
        }
        if(node.left){this.traverse(node.left)}
        if(node.right){this.traverse(node.right)}
        
    }
}

let item1 = new TNode(1)
let item2 = new TNode(2)
let item3 = new TNode(3)
let item4 = new TNode(4)
let item5 = new TNode(5)
let item6 = new TNode(6)
let item7 = new TNode(7)

let bTree = new BinaryTree()
bTree.insert(item1)
bTree.insert(item2)
bTree.insert(item3)
bTree.insert(item4)
bTree.insert(item5)
bTree.insert(item6)
bTree.insert(item7)

bTree.print()