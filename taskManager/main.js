const Task2 = require('./task');
const repoFactory = require('./repoFactory');

let task1 = new Task2(repoFactory.getRepo('task').get(1));
let task2 = new Task2(repoFactory.getRepo('task').get(2));
let task3 = new Task2(repoFactory.getRepo('task').get(3));
task1.complete();
console.log(`task 1: ${Object.keys(task1)}`);

console.log('whats here', repoFactory.getRepo('task').get(1));
