class Animal {}

class Bird extends Animal {
  chirp() {}
}

class Crow extends Bird {
  caw() {}
}

function chirp(bird: Bird): Bird {
  bird.chirp()
  return bird
}

//chirp(new Animal)
chirp(new Bird)
chirp(new Crow)

function clone(f: (b: Bird) => Bird): void {
  console.log(f)
}

function birdToBird(d: Bird): Bird {
  return d
}

clone(birdToBird)

function birdToCrow(d: Bird): Crow {
  return new Crow
}

clone(birdToCrow)