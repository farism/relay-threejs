import 'mocha'
import {expect} from 'chai'

import {imbueValues} from '../src/metadata'

import {
  convertBonusToImbuePoints,
  convertBonusToUtilityPoints,
} from '../src/helpers'

describe('#convertBonusToImbuePoints', () => {
  const values = imbueValues
  const imbuePoints = {
    1: [1, 2, 4, 6, 8, 9, 11, 13, 15, 16],
    2: [1, 5, 10, 15, 20, 25, 30, 35, 40, 45],
    4: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
    5: [1, 2, 4, 8, 12, 16, 20, 24, 28, 32],
  }

  Object.keys(values).forEach((bonusType: string) => {
    // describe(`converts bonusType: ${bonusType}`, () => {
    values[bonusType].forEach((value: number, i: number) => {
      const actual = convertBonusToImbuePoints(bonusType, value)
      const expected = imbuePoints[bonusType][i]
      it(`converts value "${value}" to "${expected}"`, () => {
        expect(actual).to.eql(expected)
      })
    })
    // })
  })
})

describe('#convertBonusToUtilityPoints', () => {
  interface IUtilityValues {
    [k: string]: number
  }

  const values: IUtilityValues = {
    1: 1,
    2: 2,
    4: 64,
    5: 3,
    8: 4,
    9: 5,
    10: 6,
    11: 7,
    12: 8,
    13: 9,
    14: 10,
    15: 11,
    16: 12,
    17: 13,
    19: 14,
    20: 15,
    21: 16,
    22: 17,
    27: 18,
    28: 19,
    29: 128,
    30: 21,
    31: 22,
    32: 23,
    34: 24,
    35: 25,
    57: 26,
    64: 27,
    68: 28,
    75: 29,
  }

  const utilityPoints: IUtilityValues = {
    1: 2,
    2: 10,
    4: 16,
    5: 6,
    8: 20,
    9: 25,
    10: 30,
    11: 35,
    12: 40,
    13: 18,
    14: 20,
    15: 22,
    16: 24,
    17: 26,
    19: 70,
    20: 75,
    21: 80,
    22: 17,
    27: 90,
    28: 38,
    29: 32,
    30: 42,
    31: 44,
    32: 115,
    34: 48,
    35: 125,
    57: 52,
    64: 54,
    68: 112,
    75: 116,
  }

  Object.keys(values).forEach((bonusType: string) => {
    describe(`converts bonusType: ${bonusType}`, () => {
      const value = values[bonusType]
      const actual = convertBonusToUtilityPoints(bonusType, value)
      const expected = utilityPoints[bonusType]
      it(`converts value "${value}" to "${expected}"`, () => {
        expect(actual).to.eql(expected)
      })
    })
  })
})
