import { randomInt } from "crypto";

export default class Robot {
  static names = new Set<string>();
  private _name: string;

  constructor() {
    this._name = this.genName();
  }

  public get name(): string {
    return this._name;
  }

  private genName = (): string => {
    const x = randomInt(65, 90);
    const y = randomInt(65, 90);
    const z = randomInt(48, 57);
    const v = randomInt(48, 57);
    const w = randomInt(48, 57);
    const randomName = String.fromCharCode(x, y, z, v, w);

    if (!Robot.names.has(randomName)) {
      Robot.names.add(randomName);
      return randomName;
    }

    return this.genName();
  };

  public resetName(): void {
    this._name = this.genName();
  }

  public static releaseNames(): void {
    Robot.names.clear();
  }
}
