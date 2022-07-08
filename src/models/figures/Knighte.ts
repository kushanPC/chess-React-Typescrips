import { Cell } from "./../Cell";
import { Colors } from "./../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-knight.png";
import whiteLogo from "../../assets/white-knight.png";

export class Knighte extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KNIGHTE;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    // if(absY !== absX) {
    //   return false
    // }

    // const dy = this.y < target.y ? 1 : -1;
    // const dx = this.x < target.x ? 1 : -1;

    // for (let i = 1; i < absY; i++) {
    //   if(!this.board.getCell(this.x + dx*i, this.y + dy * i).isEmpty()) {
    //     return false;
    //   }
    // }
    return (dx === 1 && dy === 2) || (dy === 1 && dx === 2);
  }
}
