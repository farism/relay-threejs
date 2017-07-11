import {expect} from 'chai'

import slots from './fixtures/slots'
import moh from './fixtures/moh'
import sulph from './fixtures/sulph'

import {BonusType, Resistance, Stat} from '../src/types'

import {
  getBonusesAsObject,
  getDeltas,
  sumDeltas,
  pickItem,
  pickItems,
} from '../src/consult'

const initialTarget = {
  [BonusType.Stats]: {
    [Stat.Strength]: 100,
    [Stat.Quickness]: 50,
  },
  [BonusType.Toa_Melee_Speed]: 10,
  [BonusType.Toa_Melee_Damage]: 8,
  [BonusType.Resistance]: {
    [Resistance.Energy_0]: 20,
    [Resistance.Crush_0]: 25,
  },
}

describe('getBonusesAsObject', () => {
  it('returns a flat object of bonuses keyed by `:type-:id`', () => {
    const actual = getBonusesAsObject(moh)
    const expected = {
      22: 10,
      5: {
        1: 5,
        10: 5,
        12: 5,
        15: 5,
        16: 5,
        17: 5,
        2: 5,
        22: 5,
        3: 5,
      },
    }

    expect(actual).to.eql(expected)

    const actual2 = getBonusesAsObject(sulph)
    const expected2 = {
      1: {
        0: 22,
        1: 22,
      },
      10: 2,
      19: 2,
      22: 14,
      4: 60,
      5: {
        10: 7,
        15: 7,
      },
      75: {
        0: 5,
        1: 5,
      },
    }

    expect(actual2).to.eql(expected2)
  })
})

describe('getDelta', () => {
  it('returns deltas', () => {
    const bonuses = {
      1: {
        0: 7,
        3: 20,
      },
      19: 0,
      8: 10,
      5: {
        18: 2,
        1: 10,
      },
    }
    const expected = {
      1: {
        0: 93,
        3: 30,
      },
      19: 10,
      8: -2,
      5: {
        18: 18,
        1: 15,
      },
    }
    const actual = getDeltas(bonuses, initialTarget)

    expect(actual).to.eql(expected)
  })
})

describe('sumDeltas', () => {
  it('returns all deltas summed, discarding negatives', () => {
    const sum = sumDeltas({
      1: {
        2: 93,
        3: 30,
      },
      3: 10,
      4: -2,
      5: {
        6: 18,
      },
      7: 15,
    })

    expect(sum).to.eql(166)
  })
})

describe('createItem', () => {
  it('creates an optimized item given the current target', () => {})
})

describe('pickItem', () => {
  it('picks the lowest delta item from a list of items', () => {
    const item = pickItem(initialTarget, slots[0])

    expect(item).to.eql(slots[0][4])
  })
})

describe('pickItems', () => {
  it('picks the lowest delta items from a list of slots', () => {
    const items = pickItems(initialTarget, slots)

    expect(items).to.eql([slots[0][4], slots[1][3], slots[2][3]])
  })
})
