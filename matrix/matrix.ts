class Matrix {
  private _rows: number[][];
  private _columns: number[][] = new Array();
  constructor(textArry: string) {
    this._rows = textArry
      .split("\n")
      .map((value) => value.split(" ").map((value) => Number(value)));

    console.log(this._rows);

    for (let i = 0; i < this._rows.length; i++) {
      this._columns[i] = new Array();
      for (let j = 0; j < this._rows.length; j++) {
        this._columns[i][j] = this._rows[j][i];
      }
    }
  }
  get rows(): number[][] {
    return this._rows;
  }
  get columns(): number[][] {
    return this._columns;
  }
}

export default Matrix;
