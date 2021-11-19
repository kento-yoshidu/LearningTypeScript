function increment(num?: number) {
  if (num === undefined) {
    return "何も渡されなかった"
  }
  return num + 1
}

console.log(increment(1))