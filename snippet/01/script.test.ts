import { func } from "./script"

describe.each([
  [["1", "2", "3"], [1, 2, 3]]
])("test", (a, expected) => {
  test("main", () => {
    expect(func(a)).toEqual(expected)
  })
})
