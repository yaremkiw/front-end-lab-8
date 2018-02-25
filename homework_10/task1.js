function debounce(callback, time) {
  let timerId ;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(callback, time);
  }
}

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator(); 
increaseIterator();
increaseIterator();
increaseIterator(); 
increaseIterator();
increaseIterator();
increaseIterator(); 
increaseIterator();
increaseIterator();