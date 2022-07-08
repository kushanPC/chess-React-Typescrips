import { Cell } from "./../Cell";
import { Colors } from "./../Colors";
import logo from "../../assets/black-king.png";

export enum FigureNames {
  FIGURE = "Фигура",
  KING = "Король",
  QUEEN = "Ферзь",
  KNIGHTE = "Конь",
  ROOK = "Ладья",
  BISHOP = "Слон",
  PAWN = "Пешка",
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = logo;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }
  canMove(target: Cell): boolean {
    if(target.figure?.color === this.color){
      return false
    }
    if(target.figure?.name === FigureNames.KING){
      return false
    }
    return true;
  }
  moveFigure(target: Cell) {}
}
