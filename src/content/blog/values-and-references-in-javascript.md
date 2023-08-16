---
author: Laura Ferrando Ferrero
pubDatetime: 2023-08-16T13:20:00.737Z
title: Values and References in JavaScript
postSlug: values-and-references-in-javascript
featured: true
tags:
  - javascript
  - values
  - objects
  - immutability
description: About value types in JavaScript, immutability, and why the way we learned to think about variables is "wrong"
---

Ever wondered why exactly we say that objects in JavaScript are "mutable", but strings or numbers are not? Read on to discover a (not really) new way to think about the different types of values in JavaScript.

## Table of contents

## In the beginning there were Values...

In JavaScript, there are two main value types:

1. **Primitive values**: `number`, `string`, `boolean`, `null`, `undefined`, `BigInt` and `Symbol`.
2. **Objects**: including object and array literals, functions, `Date` objects, regular expressions...

## Immutable vs Mutable values

A value is mutable when it's possible to change it. But, what does _changing a value_ mean? Aren't we changing values whenever we reassign a `var` or `let` variable?

To understand how immutability works, we need to reconsider how we think about variables and values.

### Variables _point to_ values

Let's say we have the following code snippet:

```javascript
let greeting = "hello";
```

When someone starts learning JavaScript for the first time, usually they are told that variables are boxes that _hold_ values:

![](https://hackmd.io/_uploads/r1ne7OYsn.png)

However, it's more accurate to think about variables _pointing to_ values:

![](https://hackmd.io/_uploads/ByNAM_Yo2.png)

**Primitive values are immutable**. When we reassign a variable that points to an immutable value, we are not changing the value itself. If we do this:

```javascript
let greeting = "hello";
greeting = "hi";
```

We are just changing _to what value the variable is pointing to_:

![](https://hackmd.io/_uploads/SJPC7_Fsh.png)

The old value remains unchanged. It's not possible to update it (the value itself) in any way. If there aren't any variables pointing to that value, and therefore it's not being used, the JavaScript engine will eventually delete it in a process called **garbage collection**.

This means that the difference between `let` and `const` variables is not whether we can _change their value_, but whether we can _reassign them_: that is, whether we can _change to what value they are pointing to_.

Consider now this piece of code:

```javascript
let greeting = "hello";
let welcome = greeting;
```

Initially, both `greeting` and `welcome` point to the same value:

![](https://hackmd.io/_uploads/rJnN4qKi3.png)

If we reassign the `greeting` variable, will the value of `welcome` also change?

```javascript
let greeting = "hello";
let welcome = greeting;
greeting = "hi";
```

Not really! After reassigning the `greeting` variable, it will point to the new value, but the `welcome` variable still points to the original value:

![](https://hackmd.io/_uploads/SkRXsV9i2.png)

### Reference values

So now we've seen how primitive values work. What happens with objects, then?

At first, it may seem that they work the same as primitive values. Consider this code snippet:

```javascript
let person = {
  name: "Jane",
  lastName: "Doe",
};

person = {
  name: "Sally",
  lastName: "Lockhart",
};
```

If we reassign the `person` variable to a different object, the original object will be left alone, and the variable will just point to a new one:

![](https://hackmd.io/_uploads/Hyy96dKih.png)

But... what happens if we update a _property_ of the object?

To understand it better, let's change a bit our object representation:

![](https://hackmd.io/_uploads/r1VMRuto3.png)

All properties are like variables inside the object, but _each property also points to a value, just like a regular variable does_. So, if we update one of the properties:

```javascript
let person = {
  name: "Jane",
  lastName: "Doe",
};

person.lastName = "Lockhart";
```

This is what's happening under the hood:

![](https://hackmd.io/_uploads/SyTWlqFon.png)

The object is still the same, but one of its properties has been _mutated_, and now points to a different value.

What's the consequence of this behavior if we point two different variables to the same object?

Consider this piece of code:

```javascript
let person = {
  name: "Jane",
  lastName: "Doe",
};

let personCopy = person;
```

As we've learned so far, both `person` and `personCopy` would point to the same object:

![](https://hackmd.io/_uploads/SyXYvc1h2.png)

Can you guess what would happen if we updated the `lastName` property on the `personCopy` object?

```javascript
let person = {
  name: "Jane",
  lastName: "Doe",
};

let personCopy = person;
personCopy.lastName = "Lockhart";

console.log(personCopy.lastName); // ??
console.log(person.lastName); // ??
```

Let's check out the visual representation of what happens under the hood:

![](https://hackmd.io/_uploads/BklP_9yn2.png)

First, the `lastName` property stops pointing at the string value `"Doe"` to start pointing to the string value `"Lockhart"`. So far, so good. The issue is that objects are not primitive values: a variable that points to an object is actually _pointing to a reference of that object_. Since `personCopy` **points to the same object reference** that `person` does, it also updates `person.lastName`! _We have mutated the original object_ without realizing it.

If we wanted to avoid accidentally mutating our object, we would need to **create a new object** that has all the properties of the original one, for example using the spread operator:

```javascript
let person = {
  name: "Jane",
  lastName: "Doe",
};

let personCopy = { ...person };
personCopy.lastName = "Lockhart";

console.log(personCopy.lastName); // "Lockhart"
console.log(person.lastName); // "Doe"
```

Are there other implications of objects being reference values?

Consider now this piece of code:

```javascript
let person1 = {
  name: "Jane",
  lastName: "Doe",
};

let person2 = {
  name: "Jane",
  lastName: "Doe",
};

console.log(person1 === person2); // ??
```

Let's see what happens line by line. First, we create the `person1` object:

![](https://hackmd.io/_uploads/SkwY3qk2h.png)

Then, we create the `person2` object:

![](https://hackmd.io/_uploads/BklA25J33.png)

This is the current picture of our code:

![](https://hackmd.io/_uploads/S14gTcJ32.png)

As we can see, `person1` and `person2` are _pointing to two different object references_. With all we've learned so far, what is going to get logged into the console?

```javascript
let person1 = {
  name: "Jane",
  lastName: "Doe",
};

let person2 = {
  name: "Jane",
  lastName: "Doe",
};

console.log(person1 === person2); // false
```

**`person1` and `person2` are not equal**. Even though they point to objects that look exactly the same, each of them points to a different object reference, therefore they are two different values.

## Recap

Let's review the main ideas we've learned in this post:

1. There are **two types of values**: primitive values and objects.
2. Variables are not boxes that hold values, but rather **_point to_** them.
3. Primitive values are **immutable**: they cannot be changed or destroyed. Every time we reassign a variable, we are not changing or destroying the original value, just pointing the variable to the new value.
4. Objects are **reference values**: they point to a reference in memory. The object itself cannot be changed (just like any other value), but the properties inside of it can be _mutated_.

## Bonus

If you feel like going deeper on the differences between primitive and reference values, check out these two blog posts:

- [How primitive and reference values are allocated in memory](https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/)
- [JavaScript pass-by-value for primitive and reference values](https://www.javascripttutorial.net/javascript-pass-by-value/)

That's it for today! I hope you learned something new, and that you have now a better visual representation of how variables and values work under the hood :D
