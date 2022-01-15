type Color = 'Black' | 'White'
type FileAlt = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3| 4 | 5 | 6 | 7 | 8 

class Position {
  constructor(
    private file: FileAlt,
    private rank: Rank,
  ) {}
}

class Piece {
  protected position: Position
  constructor(
    private readonly color: Color,
    file: FileAlt,
    rank: Rank
  ) {
    this.position = new Position(file, rank)
  }
}

type Color = 'Black' | 'White'
type FileAlt = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3| 4 | 5 | 6 | 7 | 8 

class Position {
  constructor(
    private file: FileAlt,
    private rank: Rank,
  ) {}

  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    }
  }
}
abstract class Piece {
  protected position: Position
  constructor(
    private readonly color: Color,
    file: FileAlt,
    rank: Rank
  ) {
    this.position = new Position(file, rank)
  }

  moveTo(position: Position) {
    this.position = position
  }
  abstract canMoveTo(position: Position): boolean
}

// const p = new Piece('Black', 'D', 8)
//=> error TS2511: Cannot create an instance of an abstract class.

class King extends Piece {
  canMoveTo(position: Position): boolean {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}

class Game {
  private pieces = Game.makePieces()

  private static makePieces() {
    return [
      new King('White', 'E', 1),
      new King('Black', 'E', 8),
    ]
  }
}