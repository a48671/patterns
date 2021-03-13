import { Bridge } from 'patterns/bridge';
console.log("hello");
const bridge = new Bridge();


const root = document.getElementById('root');

root.innerHTML = bridge.say();
