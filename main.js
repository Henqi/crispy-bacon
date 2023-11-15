import * as Bacon from 'baconjs'

// Create a Bacon.js stream
const myStream = Bacon.fromArray([1, 2, 3, 4, 5]);

// Define a transformation on the stream
const transformedStream = myStream.map(x => x * 2);

// Subscribe to the transformed stream
transformedStream.onValue(value => {
  console.log(value);
});

let s = Bacon.once("heiia")
s.log()
