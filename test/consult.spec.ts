import { expect } from 'chai'

import slots from './fixtures/slots'
import moh from './fixtures/moh'
import sulph from './fixtures/sulph'

import {
  getBonusesAsObject,
  getDeltas,
  sumDeltas,
  pickItem,
  pickItems,
} from '../src/consult'

const initialTarget = {
  '1-0': 100,
  '1-3': 50,
  '19-': 10,
  '8-': 8,
  '3-18': 20,
  '3-4': 25,
}

describe('getBonusesAsObject', () => {
  it('returns a flat object of bonuses keyed by `:type-:id`', () => {
    const actual = getBonusesAsObject(moh)
    const expected = {
      "22-": 10,
      "5-1": 5,
      "5-10": 5,
      "5-12": 5,
      "5-15": 5,
      "5-16": 5,
      "5-17": 5,
      "5-2": 5,
      "5-22": 5,
      "5-3": 5,
    }

    expect(actual).to.eql(expected);

    const actual2 = getBonusesAsObject(sulph)
    const expected2 = {
      "1-0": 22,
      "1-1": 22,
      "10-": 2,
      "19-": 2,
      "22-": 14,
      "4-": 60,
      "5-10": 7,
      "5-15": 7,
      "75-0": 5,
      "75-1": 5,
    }

    expect(actual2).to.eql(expected2);
  })
})

describe('getDelta', () => {
  it('returns deltas', () => {
    const bonuses = {
      '1-0': 7,
      '1-3': 20,
      '19-': 0,
      '8-': 10,
      '3-18': 2,
      '3-4': 10,
    }
    const expected = {
      '1-0': 93,
      '1-3': 30,
      '19-': 10,
      '8-': -2,
      '3-18': 18,
      '3-4': 15,
    }
    const actual = getDeltas(bonuses, initialTarget)

    expect(actual).to.eql(expected)
  })
})

describe('sumDeltas', () => {
  it('returns all deltas summed', () => {
    const deltas = {
      1: 93,
      2: 30,
      3: 10,
      4: -2,
      5: 18,
      6: 15,
    }

    const sum = sumDeltas(deltas)

    expect(sum).to.eql(166)
  })
})

describe('pickItem', () => {
  it('picks the lowest delta item from a list of items', () => {
    const item = pickItem(initialTarget, slots[0])

    expect(item).to.eql(slots[0][1])
  })
})

describe.only('pickItems', () => {
  it('picks the lowest delta items from a list of slots', () => {
    const items = pickItems(initialTarget, slots)

    expect(items).to.eql([
      slots[0][1],
      slots[1][4],
      slots[2][0],
    ])
  })
})
