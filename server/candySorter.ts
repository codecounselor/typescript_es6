import Candy from "./candy";

export default class CandySorter {

    constructor(public name:string) {

    }

    sort(candy:Array<Candy>) {
        const sortedCandy = candy.sort( (a, b) => {
            if (a.type === b.type) {
                switch (a.type) {
                    case 'chocolate':
                        return a.getWeight() - b.getWeight();
                }
            }
            return -1;
        })
        return sortedCandy;
    }
}