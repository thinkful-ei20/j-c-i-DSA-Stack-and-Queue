'use strict';
const Stack = require('./stack');
const Queue = require('./queue');
const starTrekQ  = new Queue();

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');


function display(queue){
  let currNode = queue.first;
  while(currNode){
    console.log(currNode.value);
    currNode = currNode.prev;
  }
}

function peek(queue){
  return queue.first ? queue.first.value : null;  
}


// display(starTrekQ);
// console.log(peek(starTrekQ));
starTrekQ.dequeue();
// display(starTrekQ);

class StackQueue{
  constructor(){
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(data){
    this.inbox.push(data);
  }

  dequeue(){
    if(!this.outbox.top){
      while(this.inbox.top){
        this.outbox.push(this.inbox.pop())
      }
    }
    return this.outbox.pop();
  }
}

let test = new StackQueue();
test.enqueue('hello');
test.enqueue('hello2');
console.log(test.dequeue());
console.log(test);
// display(test.inbox)

