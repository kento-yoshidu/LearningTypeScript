type ExistingUser = {
  id: number
  name: string
}

type NewUser = {
  name: string
}

function deleteUser(user: {id?: number, name: string}) {
  delete user.id
}

let existingUser: ExistingUser = {
  id: 123,
  name: "Runa"
}

deleteUser(existingUser)

console.log(existingUser)
//=> { name: 'Runa' }

type LegacyUser = {
  id?: number | string;
  name: string
}

let legacyUser: LegacyUser = {
  id: "123",
  name: "Runa"
}

deleteUser(legacyUser)
// Argument of type 'LegacyUser' is not assignable to parameter of type '{ id?: number | undefined; name: string; }'.
// Types of property 'id' are incompatible.
// Type 'string | number | undefined' is not assignable to type 'number | undefined'.
// Type 'string' is not assignable to type 'number | undefined'.
