class Stack { 
    constructor()
    {
        this.items = [];
    }

push(element)
{
    this.items.push(element);
}
pop()
{
    if (this.items.length == 0)
        return "Underflow";
        console.log("The removed element is :- ")
    return this.items.pop();
}
peek()
{
    return this.items[this.items.length - 1];
}
isEmpty()
{
    return this.items.length == 0;
}
printStack()
{
    console.log("The elements are :- ")
    for (var i = 0; i < this.items.length; i++)
        console.log(this.items[i])
}
}
var s = new Stack();
s.push(13);
s.push(21);
s.push(9);
s.printStack();
console.log(s.pop()); 
s.printStack();
s.push(1311);
s.printStack();