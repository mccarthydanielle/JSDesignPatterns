# JavaScript Design Patterns

### What constitutes a pattern?

- It solves a problem.
- It is a proven concept.
- The solution is not obvious.
- Describes a relationship (9/10 times deals with a relationship)
- It has a significant human component (requires thought)

### Why bother with patterns?

- Why solve it again? Use someone else's solution. Lazy programmer === good programmer.
- Common vocabulary.

### Intro to types of patterns.

- Creational: deals with the creation of new instances of an object

  - constructor (specific to JS)
  - Module (specific to JS)
    - grouping of like methods or a service of some sort
  - Factory
  - Singleton

- Structural: deals with the make up of the actual objects themselves

  - Decorator
  - Facade
  - Flyweight

- Behavorial (these 3 are fairly well used in JS, most popular): deals with how objects relate to each other & how they operate
  - Command
  - Mediator
  - Observer

# Creational Patterns

- Used to create new objects.
- Adapting creation to the situation

#### Constructor Pattern

- Used to create new objects with their own object scrope.
- New keyword creates a constructor function
- Creates a brand new object
- Links new object to object prototype
- Binds 'this' to the new object scope
- Implicitly returns this
- Prototypes
  - An encapsulation of properties that an object links to.
  - Example: we don't want to take up space by giving several objects the same method.

#### Module Pattern

- Used as a simple way to encapsulate a group of like methods that you are going to use in your application
- It is like a toolbox of functions that you're going to use, like a service for DB calls, service for HTTP calls.
- In the example we created a DB connection in the taskRepository.js file. This pattern allows nothing to gain access to the db, all methods are contained within this module.
- Revealing module pattern: define methods above return, return methods, this way we can see what methods are available on this module.

#### Factory Pattern

- Used to create objects for us.
- Simplifies things.
- Creating different objects based on need.
- Repository creation.
- In the example we created a function that would return whatever repo we needed, each in the same format.

#### Singleton Pattern

- Used to restrict an object to one instance of that object across the application.
- Remembers the last time you used it, and hands you back the instance you used before.
- Node uses CommonJS pattern

#### Creational Design Patterns Summary

- Patterns we use to create new instances of objects

# Structural Patterns

- Concerned with how objects are made up and simplify relationships between objects
- All about how we take one object, and relate it to something else
- extends functionality OR simplifies functionality

#### Decorator Pattern (extends functionality)

- Used to add new functionlity to an existing object, without being obtrusive
- more complete inheritance
- wraps an object
- protects existing objects
- allows extended functionality

#### Facade Pattern (simplifies functionality)

- Used to provide a simplified interface to a complicated system.
- Hides the chaos from us
- Simplifies the interface
- Think JQuery (gives us nice simple interface to deal with DOM)
- does not ADD functionality, just creates an interface that makes object easier to use.
- create a wrapper or module (function that returns an object)
- maintaining functionality but doing it in a clean way i.e. turning into decorated module pattern or combining 2 methods together

#### Flyweight Pattern (simplifies functionality)

- Conserves memory by sharing portions of an object between objects
- Example: in a task list, our tasks have lots of non-unique data. If you have 5k tasks all with the same data, that takes up lots of unneeded memory.
- Flyweights share data across objects so we only do it ONCE. Kind of like adding functions to prototypes.
- Results in smaller memory footprint
- Only useful if you have large #s of objects, this will not do a lot of good because there is some overhead to implementing this pattern.
- Least likely to be used but when you need it, you need it. You need w/ large datasets 

#### Structural Design Patterns Summary

# Behavorial Patterns

TODO
show all ways to create constructor / prototypes (old and new)
Read about above patterns in design patterns book
