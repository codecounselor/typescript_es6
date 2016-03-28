export default class Candy {

  private weight: number;

  constructor(public type: string, public color: string) {

  }

  public addWeight(weight) {
    this.weight = weight;
    return this;
  }

  public getWeight(){
    return this.weight;
  }
}