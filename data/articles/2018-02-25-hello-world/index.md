---
title: Hello World
author: tin-rabzelj
tags:
  - Google App Engine
  - Unreal Engine
  - Game Development
  - Go
description: ...
cover: ./cover.jpg
---

Ut non sequi velit praesentium aut porro. Molestiae at voluptas sunt praesentium. Neque omnis est et consequuntur harum. Minima architecto eligendi.

# Code

Laboriosam `f = (x) => x * x` perferendis voluptatem.

```js
import React from 'react';

import '../styles/main.scss';

const IndexLayout = ({ children }) => {
  return <div>{children()}</div>;
};

export default IndexLayout;
```

```go
package main

import "fmt"

// fib returns a function that returns
// successive Fibonacci numbers.
func fib() func() int {
  a, b := 0, 1
  return func() int {
    a, b = b, a+b
    return a
  }
}

func main() {
  f := fib()
  // Function calls are evaluated left-to-right.
  fmt.Println(f(), f(), f(), f(), f())
}
```

```rust
use std::env;
use std::fs::File;
use std::io::prelude::*;

fn main() {
  // --snip--
  println!("In file {}", filename);

  let mut f = File::open(filename).expect("file not found");

  let mut contents = String::new();
  f.read_to_string(&mut contents)
    .expect("something went wrong reading the file");

  println!("With text:\n{}", contents);
}
```
