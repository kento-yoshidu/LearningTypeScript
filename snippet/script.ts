function func(a: string, b: string, c: string) {
  if (a === b) {
    return c
  } else if (b === c) {
    return a
  } else {
    return b
  }
}

function main (input: string) {
  const i = input.split("\n")
  
  const a = i[0].split(" ")
  const b = i[1].split(" ")
  const c = i[2].split(" ")

  let ansx = func(a[0], b[0], c[0])
  let ansy = func(a[1], b[1], c[1])

  console.log(ansx, ansy)
}


const input = `-1 -1
-1 2
3 2`


main(input)
