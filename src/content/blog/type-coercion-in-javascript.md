---
author: Laura Ferrando Ferrero
pubDatetime: 2023-08-29T17:13:00.737Z
title: Type coercion in JavaScript
postSlug: type-coercion-in-javascript
featured: true
tags:
  - javascript
  - types
  - coercion
description: About the sneaky way JavaScript has to mess around with your values - if you're not careful enough
---

Unlike other programming languages, JavaScript does not have static typing: values can be coerced into a different value type at runtime, leading to unexpected results. But what does all this even mean?

## Table of contents

**Type coercion** is the _implicit_ conversion of a value from one data type to another. It occurs in JavaScript because it's a **dynamically typed language**: value types are not declared explicitly, but inferred by the interpreter at runtime.

Because of this feature, when values of different data types are compared or used together in an expression, some of them may be implicitly coerced into another data type.

## Kinds of type coercion

Let's take a look at the main kinds of type coercion in JavaScript!

### Number (and other value types) to String coercion

When a non-string value is added (or rather, _concatenated_) to a string by using the `+` operator, the non-string value is coerced into the string data type.

```javascript
const a = '5';
const b = 9; // coerced to string '9'
const result = a + b;

console.log(result);

// "59"
```

```javascript
const a = '5';
const b = 9; // coerced to string '9'
const result = b + a;

console.log(result);

// "95"
```

Although many examples of this type of coercion can be found with number values, it can also occur with other value types:

```javascript
const a = '5';
const b = true; // coerced to string 'true'
const result = a + b;

console.log(result);

// "5true"
```

### String to Number coercion

When using the `-`, `*`, `/` or `%` operators, any value that is not a number is coerced into the number data type. This is because these operations can only be performed between numbers.

```javascript
const a = 10;
const b = '5'; // coerced to number 5
const result = a - b;

console.log(result);

// 5
```

### Boolean to Number coercion

When a boolean is added to a number, the boolean value is coerced into a number, since it's safer and easier than the other way around.

```javascript
const a = true; // coerced to number 1
const b = 2;
const result = a + b;

console.log(result);

// 3
```

```javascript
const a = false; // coerced to number 0
const b = 2;
const result = a + b;

console.log(result);

// 2
```

## The equality operators

Type coercion does not only happen when performing operations with different value types: it also occurs when we compare them.

### Loose type equality

Comparing values with the `==` or `!=` operators uses implicit type coercion. As a result, **any non-number value will be coerced into the number data type**, and then compared. Only the final coerced values will be compared, and not their type.

```javascript
const a = 10;
const b = '10'; // coerced to number 10

console.log(a == b);

// true
```

```javascript
const a = true; // coerced to number 1
const b = 1;

console.log(a == b);

// true
```

```javascript
const a = true; // coerced to number 1
const b = 'true'; // coerced to NaN

console.log(a == b);

// false
```

```javascript
const a = null; // coerced to number 0
const b = undefined; // coerced to number 0

console.log(a == b);

// true
```

### Strict type equality

Comparing values with the `===` or `!==` operators does not use implicit type coercion. It will always **compare not only the values, but also their data type**.

Using these operators helps us avoid unexpected type coercion that may lead to errors in our code.

```javascript
const a = 10;
const b = '10';

console.log(a === b);

// false
```

```javascript
const a = true;
const b = 1;

console.log(a === b);

// false
```

```javascript
const a = true;
const b = 'true';

console.log(a === b);

// false
```

```javascript
const a = null;
const b = undefined;

console.log(a === b);

// false
```

## Explicit type conversion

Type coercion is different from **type conversion**, which can be implicit or explicit. We can explicitly convert a value into a data type by using the constructor function of that data type: `Number()`, `String()` or `Boolean()`.

```javascript
const a = '5';

console.log(Number(a));

// 5
```

# Recap

Let’s review the main ideas we’ve learned in this post:

1. JavaScript is a **dynamically typed language**: we don't define the value types explicitely, therefore they are inferred at runtime.
2. **Type coercion** occurs when a value type is implicitely converted into another.
3. Using the **strict equality operators** (`===` and `!==`) is recommended to avoid errors.
4. **Type conversion** can be implicit of explicit. We explicitely convert a value into another data type by using the appropriate constructor function.

# Bonus

We've mainly discussed about how type coercion works with primitive types. If you want to dig deeper into the topic, here are a couple of articles that also go over how non-primitive types (mainly arrays and objects) are coerced:

- [More complex examples explained](https://dev.to/tchaflich/javascript-wtfs-explained-type-coercion-4i8o)
- [How JavaScript abstract operations work under the hood](https://blog.devgenius.io/coercion-in-javascript-47ba133d7ce9) and result in implicit type coercion

That's it for today! I hope you have a better idea of how type coercion works in JavaScript, and use this knowledge to avoid or debug errors when you find them :D
