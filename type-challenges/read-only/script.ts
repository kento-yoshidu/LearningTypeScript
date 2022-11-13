namespace ReadOnly {
  interface Todo {
    title: string
    description: string
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  /* ★★★ */
  type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
  }

  // todo.title = "Hello" // Error: cannot reassign a readonly property
  // todo.description = "barFoo" // Error: cannot reassign a readonly property
}
