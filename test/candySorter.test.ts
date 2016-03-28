import CandySorter from "../server/candySorter";
import Candy from "../server/candy";

import chai from 'chai';
const assert = chai.assert;

describe('Easter candy', () => {

  const candySorter = new CandySorter('Easter Sorter');
  const easterCandy = [
    new Candy('chocolate', 'dark').addWeight(.5),
    new Candy('chocolate', 'white').addWeight(.2),
    new Candy('chocolate', 'milk').addWeight(1),
    new Candy('chocolate', 'burnt').addWeight(.25),
    new Candy('jellybean', 'orange'),
    new Candy('jellybean', 'black')
  ];

  describe('that is chocolate', () => {
    it('is sorted by size', () => {
      const sorted = candySorter.sort(easterCandy);
      const chocolates = sorted.filter(c => c.type === 'chocolate');
      assert.deepEqual(chocolates.map(c => c.color), ['white', 'burnt', 'dark', 'milk']);
    });
  });

  describe('this is jelly beans', () => {
    it('are sorted by color', () => {
      const sorted = candySorter.sort(easterCandy);
      const chocolates = sorted.filter(c => c.type === 'jellybean');
      assert.deepEqual(chocolates.map(c => c.color), ['black', 'orange']);
    });
  });

});