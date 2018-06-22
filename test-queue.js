'use strict';

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
display(starTrekQ);