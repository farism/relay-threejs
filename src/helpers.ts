interface IConversionMapping {
  [k: number]: (value: number) => number
}

export const convertBonusToImbuePoints = (
  bonusType: string,
  value: number,
): number => {
  const bonusImbueMapping: IConversionMapping = {
    1: val => Math.floor(val / 1.725),
    2: val => (val - 1) * 5,
    4: val => val * 0.25,
    5: val => (val - 1) * 2,
  }

  return Math.max(1, bonusImbueMapping[bonusType](value))
}

// 1: "Stats",
// 2: "Skills",
// 4: "Hit Points",
// 5: "Resistance",
// 8: "Toa Melee Damage",
// 9: "Toa Magic Damage",
// 10: "Toa Style Damage",
// 11: "Toa Archery Range",
// 12: "Toa Spell Range",
// 13: "Toa Spell Duration",
// 14: "Toa Buff Bonus",
// 15: "Toa Debuff Bonus",
// 16: "Toa Heal Bonus",
// 17: "Toa Fatigue",
// 19: "Toa Melee Speed",
// 20: "Toa Archery Speed",
// 21: "Toa Cast Speed",
// 22: "Armor Factor (AF)",
// 27: "Toa Archery Damage",
// 28: "Toa Overcap",
// 29: "Toa Hit Points Cap",
// 30: "Toa Power Pool Cap",
// 31: "Toa Fatigue Cap",
// 32: "Toa Resistance Piece",
// 34: "Toa Power Pool",
// 35: "Toa Artifact (Arcane Siphon / Conversion / Radiant Aura / Money / Exp / RPs / BPs)",
// 64: "Mythical Cap Increase",
// 68: "Mythical Resist and Cap",
// 75: "Mythical Stat and Cap Increase",
// }q

export const convertBonusToUtilityPoints = (
  bonusType: string,
  value: number,
): number => {
  const bonusUtilityMapping: IConversionMapping = {
    1: val => val * 2,
    2: val => val * 5,
    4: val => val / 4,
    5: val => val * 2,
    8: val => val * 5,
    9: val => val * 5,
    10: val => val * 5,
    11: val => val * 5,
    12: val => val * 5,
    13: val => val * 2,
    14: val => val * 2,
    15: val => val * 2,
    16: val => val * 2,
    17: val => val * 2,
    19: val => val * 5,
    20: val => val * 5,
    21: val => val * 5,
    22: val => val,
    27: val => val * 5,
    28: val => val * 2,
    29: val => val / 4,
    30: val => val * 2,
    31: val => val * 2,
    32: val => val * 5,
    34: val => val * 2,
    35: val => val * 5,
    57: val => val * 2,
    64: val => val * 2,
    68: val => val * 4,
    75: val => val * 4,
  }

  return bonusUtilityMapping[bonusType](value)
}
