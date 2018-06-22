const Queue = require('./queue');
const myQueue = new Queue();

myQueue.enqueue('A');
myQueue.enqueue('B');
myQueue.enqueue('C');

function display(queue){
  let currNode = queue.first;
  while(currNode){
    console.log(currNode.value);
    currNode = currNode.prev;
  }
}

display(myQueue);