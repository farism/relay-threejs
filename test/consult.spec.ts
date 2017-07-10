import { expect } from 'chai';

import slots from './fixtures/slots';

import {
  getDeltas,
  sumDeltas,
  pickItem,
  pickItems,
} from '../src/consult'

const initialTarget = {
  strength: 100,
  quickness: 50,
  meleespeed: 10,
  meleedamage: 8,
  resist_crush: 20,
  resist_slash: 25,
}

describe('getDelta', () => {
  it('returns deltas', () => {
    const item = {
      strength: 7,
      quickness: 20,
      meleespeed: 0,
      meleedamage: 10,
      resist_crush: 2,
      resist_slash: 10,
    }
    const expected = {
      strength: 93,
      quickness: 30,
      meleespeed: 10,
      meleedamage: -2,
      resist_crush: 18,
      resist_slash: 15,
    }
    const actual = getDeltas(item, initialTarget)

    expect(actual).to.eql(expected)
  })
})

describe.only('sumDeltas', () => {
  it('returns all deltas summed', () => {
    const item = {
      strength: 7,
      quickness: 20,
      meleespeed: 0,
      meleedamage: 10,
      resist_crush: 2,
      resist_slash: 10,
    }
    const expected = {
      strength: 93,
      quickness: 30,
      meleespeed: 10,
      meleedamage: 0,
      resist_crush: 18,
      resist_slash: 15,
    }

    const sum = sumDeltas(getDeltas(item, initialTarget))

    expect(sum).to.eql(166);
  })
})

describe('pickItem', () => {
  it('picks the lowest delta item from a list of items', () => {
    const item = pickItem(initialTarget, slots[0])

    expect(item).to.eql(slots[0][4])
  });
});

// describe('pickItems', () => {
//   it('picks the lowest delta items from a list of slots', () => {
//     const items = pickItems(initialTarget, slots)
//
//     expect(items).to.eql([
//       slots[0][4],
//       slots[1][3],
//       slots[2][2],
//     ])
//   });
// });
