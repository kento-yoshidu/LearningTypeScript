type Reserve = {
  (from: Date, to: Date, destination: string): void
  (from: Date, destination: string): void
}

let reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
): void => {
  if (toOrDestination instanceof Date && destination !== undefined) {
    console.log(`${from}, ${destination}`)
  } else if (typeof toOrDestination === 'string') {
    console.log(`${from}, ${toOrDestination}, ${destination}`)
  }
}

reserve(new Date(), new Date(), "london")
