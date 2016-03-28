export default class Candy {

  private weight: number;

  /**
   *
   * @param type The kind of candy
   * @param color The color of the candy
     */
  constructor(public type: string, public color: string) { }

  public addWeight(weight) {
    this.weight = weight;
    return this;
  }

  public getWeight(){
    return this.weight;
  }
  
}