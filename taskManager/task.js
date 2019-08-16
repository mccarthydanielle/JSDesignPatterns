/*---------Creational Patterns---------*/

// Constructor Patterns

/* Example of constructor function pre ecmascript 2015 */

const Task = function(name) {
  this.name = name;
  this.completed = false;
};

// Prototypal inheritance

Task.prototype.complete = function() {
  console.log(`Completing task: ${this.name}`);
  this.completed = true;
};

Task.prototype.save = function() {
  console.log(`Saving task: ${this.name}`);
};

/* Example of constructor function ecmascript 2015 */

const Repo = require('./taskRepository');

class Task2 {
  constructor(data) {
    this.name = data.name;
    this.completed = false;
  }

  complete() {
    console.log(`Completing task: ${this.name}`);
    this.completed = true;
  }

  save() {
    console.log(`Saving task: ${this.name}`);
    Repo.save(this);
  }
}

module.exports = Task2;
