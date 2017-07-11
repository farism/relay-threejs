export default {
  id: 15174,
  name: 'Sulphurous Demon Necklace',
  category: 5,
  realm: 0,
  icon: 101,
  material: 0,
  artifact: false,
  sell_value: 37719,
  flags: {
    emblemizable: false,
    dyable: false,
  },
  requirements: {
    level_required: 50,
  },
  bonuses: [
    {
      type: 22,
      value: 14,
    },
    {
      type: 1,
      value: 22,
      id: 0,
    },
    {
      type: 1,
      value: 22,
      id: 1,
    },
    {
      type: 75,
      value: 5,
      id: 0,
    },
    {
      type: 75,
      value: 5,
      id: 1,
    },
    {
      type: 5,
      value: 7,
      id: 15,
    },
    {
      type: 5,
      value: 7,
      id: 10,
    },
    {
      type: 19,
      value: 2,
      requirement_id: 5542,
    },
    {
      type: 4,
      value: 60,
    },
    {
      type: 10,
      value: 2,
      requirement_id: 5542,
    },
  ],
  abilities: [
    {
      spell: 12202,
      position: 1,
      max_charges: 30,
      magic_type: 6,
    },
    {
      spell: 3403,
      position: 2,
      max_charges: 30,
      requirement_id: 11964,
      magic_type: 6,
    },
  ],
  sources: {
    monsters: ['Legion', 'Jack Frost'],
    stores: ['DF Blood Jewelry', 'Merch Event - DF Accessories'],
  },
  use_duration: 600,
  bonus_level: 47,
  delve_text:
    " \nMagical Bonuses:\n- Strength: 22 pts\n- Dexterity: 22 pts\n- Mythical Stat and Cap Increase ( Strength ): 5\n- Mythical Stat and Cap Increase ( Dexterity ): 5\n- Matter: 7%\n- Heat: 7%\n- Hits: 60 pts\n \nLevel Requirement: 50 Level\n \nBonus to armor factor (AF): 14\nBonus to melee combat speed: 2%\nBonus to style damage: 2%\n \nCharged Magic Ability:\n- 30 Charges\n- 30 Max\nFunction: shield\n \nAdds to the recipient's Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.\n \nValue: 75\nTarget: Self\nDuration: 10:00 min\nCasting time: instant\n \n- This spell is cast when the item is used.\n \nSecondary Charged Magic Item:\n- 30 Charges\n- 30 Max\n \nAdds a shield to the recipient which will temporarily absorb some of the damage type specified.\n \nAbsorption: 50%\nValue: 250\nTarget: Self\nDuration: 10:00 min\nCasting time:      3.0 sec\n \nAlso casts:\nFunction: Cost Reduction\n \nReduces the \n \nReduction: 0.1%\nTarget: Self\nDuration: 20:00 min\nCasting time:      2.0 sec\n \n \n- This spell is cast when the item is used.\n- Requirement: More than 1 /use req\n \nCan use item every: 10:00 min\n \n \nBonus Level: 47\n",
}
