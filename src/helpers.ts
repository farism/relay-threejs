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

export const convertBonusToUtilityPoints = (
  bonusType: string,
  value: number,
): number => {
  const bonusUtilityMapping: IConversionMapping = {
    [BonusType.Stats]: R.multiply(2),
    [BonusType.Skills]: R.multiply(5),
    [BonusType.Hit_Points]: R.multiply(0.25),
    [BonusType.Resistance]: R.multiply(2),
    [BonusType.Toa_Melee_Damage]: R.multiply(5),
    [BonusType.Toa_Magic_Damage]: R.multiply(5),
    [BonusType.Toa_Style_Damage]: R.multiply(5),
    [BonusType.Toa_Archery_Range]: R.multiply(5),
    [BonusType.Toa_Spell_Range]: R.multiply(5),
    [BonusType.Toa_Spell_Duration]: R.multiply(2),
    [BonusType.Toa_Buff_Bonus]: R.multiply(2),
    [BonusType.Toa_Debuff_Bonus]: R.multiply(2),
    [BonusType.Toa_Heal_Bonus]: R.multiply(2),
    [BonusType.Toa_Fatigue]: R.multiply(2),
    [BonusType.Toa_Melee_Speed]: R.multiply(5),
    [BonusType.Toa_Archery_Speed]: R.multiply(5),
    [BonusType.Toa_Cast_Speed]: R.multiply(5),
    [BonusType.Armor_Factor]: R.identity,
    [BonusType.Toa_Archery_Damage]: R.multiply(5),
    [BonusType.Toa_Overcap]: R.multiply(2),
    [BonusType.Toa_Hit_Points_Cap]: R.multiply(0.25),
    [BonusType.Toa_Power_Pool_Cap]: R.multiply(2),
    [BonusType.Toa_Fatigue_Cap]: R.multiply(2),
    [BonusType.Toa_Resistance_Piece]: R.multiply(5),
    [BonusType.Toa_Power_Pool]: R.multiply(2),
    [BonusType.Toa_Artifact]: R.multiply(5),
    [BonusType.Spell_Power_Cost_Reduction_PvE]: R.multiply(2),
    [BonusType.Mythical_Cap_Increase]: R.multiply(2),
    [BonusType.Mythical_Resist_and_Cap]: R.multiply(4),
    [BonusType.Mythical_Stat_and_Cap_Increase]: R.multiply(4),
  }

  return bonusUtilityMapping[bonusType](value)
}
