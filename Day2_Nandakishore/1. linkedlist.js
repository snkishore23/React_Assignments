class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add = (elt) => {
        var node = new Node(elt);
        var current;
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    insertAt = (elt, index) => {
        if (index < 0 || index > this.size)
            return console.log("Invalid Index");
        else {
            var node = new Node(elt);
            var curr, prev;
            curr = this.head;
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                } 
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    removeFrom = (index) => {
        if (index < 0 || index >= this.size)
            return console.log("Invalid Index");
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;
            if (index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--; 
            return curr.element;
        }
    }
    removeElement = (element) => {
        var current = this.head;
        var prev = null; 
        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return "Removed Element is " + current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    } 
    indexOf = (element) => {
        var count = 0;
        var current = this.head; 
        while (current != null) {
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        } 
        return -1;
    }
     isEmpty = () => {
        return this.size == 0;
    }
     size_of_list = () => {
        console.log(this.size);
    } 
    printList = () => {
        var el = this.head;
        console.log("The elements are :- ")
        while (el) {
            console.log(el.element)
            el = el.next;
        }
    }
}
 

var l = new LinkedList();
l.add(13);
l.add(27);
l.add(43);
l.add(21);
l.printList(); 
console.log(l.removeElement(43)); 
l.printList(); 
l.insertAt(60, 0);
l.insertAt(123,l.size);
l.printList();
