const a = [1, 2, 3]
// number[]

a.push(4)
// [1, 2, 3, 4]

// a.push('a')
// TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

const b = []
// any[]

b.push(1, "1", true, {}, null, undefined)
// [ 1, '1', true, {}, null, undefined ]
