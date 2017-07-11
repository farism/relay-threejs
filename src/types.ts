export interface IItemAbility {
  level_required?: number
  magic_type?: number
  max_charges?: number
  position?: number
  requirement_id?: number
  spell?: number
}

export interface IItemBonus {
  id?: number
  level_required?: number
  requirement_id?: number
  type?: number
  value?: number
}

export interface IItemFlags {
  emblemizable?: boolean
  dyable?: boolean
  no_sell?: boolean
  no_trade?: boolean
  no_destroy?: boolean
  no_drop?: boolean
  no_bank?: boolean
}

export interface IItemRequirements {
  champion_level_required?: number
  level_required?: number
  skills_trained_required?: number[]
  usable_by?: number[]
}

export interface IItemSources {
  monsters?: string[]
  quests?: string[]
  stores?: string[]
}

export interface IItemTypeData {
  absorption?: number
  armor_factor?: number
  base_quality?: number
  clamped_armor_factor?: number
  clamped_dps?: number
  damage_type?: number
  dps?: number
  left_handed?: boolean
  range?: boolean
  shield_size?: number
  slot?: number
  speed?: number
  two_handed?: boolean
}

export interface IItem {
  id?: number
  abilities?: IItemAbility[]
  artifact?: boolean
  artifact_pre_leveled?: boolean
  bonus_level?: number
  bonuses?: IItemBonus[]
  category?: number
  delve_text?: string
  dye_type?: number
  flags?: IItemFlags
  icon?: number
  material?: number
  name?: string
  realm?: number
  requirements?: IItemRequirements
  salvage_amount?: number
  sell_value?: number
  sources?: IItemSources
  type_data?: IItemTypeData
  use_duration?: number
}

export enum Absorption {
  Cloth = 0,
  Leather = 10,
  Studded = 19,
  Chain = 27,
  Plate = 34,
}

export enum Artifact {
  Arcane_Siphon = 1,
  Conversion = 2,
  Radiant_Aura = 3,
  XP_Bonus = 4,
  Gold_Bonus = 5,
  Realm_Point_Bonus = 6,
  Bounty_Point_Bonus = 7,
}

export enum BonusType {
  Stats = 1,
  Skills = 2,
  Hit_Points = 4,
  Resistance = 5,
  Focus = 6,
  Toa_Melee_Damage = 8,
  Toa_Magic_Damage = 9,
  Toa_Style_Damage = 10,
  Toa_Archery_Range = 11,
  Toa_Spell_Range = 12,
  Toa_Spell_Duration = 13,
  Toa_Buff_Bonus = 14,
  Toa_Debuff_Bonus = 15,
  Toa_Heal_Bonus = 16,
  Toa_Fatigue = 17,
  Toa_Melee_Speed = 19,
  Toa_Archery_Speed = 20,
  Toa_Cast_Speed = 21,
  Armor_Factor = 22,
  Crafting_Min_Quality = 23,
  Crafting_Quality = 24,
  Crafting_Speed = 25,
  Crafting_Skill_Gain = 26,
  Toa_Archery_Damage = 27,
  Toa_Overcap = 28,
  Toa_Hit_Points_Cap = 29,
  Toa_Power_Pool_Cap = 30,
  Toa_Fatigue_Cap = 31,
  Toa_Resistance_Piece = 32,
  Toa_Power_Pool = 34,
  Toa_Artifact = 35,
  Spell_Power_Cost_Reduction_PvE = 37,
  Concentration = 38,
  Health_Regeneration = 40,
  Mana_Regeneration = 41,
  Piece_Ablative_PvE = 42,
  Death_Experience_Loss_Reduction = 44,
  Negative_Effect_Duration_Reduction_PvE = 46,
  Style_Cost_Reduction_PvE = 47,
  To_Hit_Bonus_PvE = 48,
  Defensive_Bonus_PvE = 49,
  Bladeturn_Reinforcement = 50,
  Parry_PvE = 51,
  Block_PvE = 52,
  Evade_PvE = 53,
  Reactionary_Style_Damage_Bonus_PvE = 54,
  Mythical_Encumbrance = 55,
  Mythical_Resistance_Cap = 57,
  Mythical_Siege_Speed = 58,
  Mythical_Parry = 60,
  Mythical_Evade = 61,
  Mythical_Block = 62,
  Mythical_Coin = 63,
  Mythical_Cap_Increase = 64,
  Mythical_Crowd_Control_Duration_Decrease = 66,
  Mythical_Essence_Resist = 67,
  Mythical_Resist_and_Cap = 68,
  Mythical_Siege_Damage_Ablative = 69,
  Mythical_DPS = 71,
  Mythical_Realm_Points = 72,
  Mythical_Spell_Focus = 73,
  Mythical_Resurrection_Sickness_Reduction = 74,
  Mythical_Stat_and_Cap_Increase = 75,
  Mythical_Health_Regen = 76,
  Mythical_Power_Regen = 77,
  Mythical_Endurance_Regen = 78,
  Mythical_Physical_Defense = 80,
}

export enum Category {
  Weapon = 1,
  Armor = 2,
  Shield = 3,
  Instrument = 4,
  Jewelry = 5,
  Mount = 6,
  Consumable = 7,
  Other = 8,
}

export enum Class {
  Paladin = 1,
  Armsman = 2,
  Scout = 3,
  Minstrel = 4,
  Theurgist = 5,
  Cleric = 6,
  Wizard = 7,
  Sorcerer = 8,
  Infiltrator = 9,
  Friar = 10,
  Mercenary = 11,
  Necromancer = 12,
  Cabalist = 13,
  Reaver = 19,
  Thane = 21,
  Warrior = 22,
  Shadowblade = 23,
  Skald = 24,
  Hunter = 25,
  Healer = 26,
  Spiritmaster = 27,
  Shaman = 28,
  Runemaster = 29,
  Bonedancer = 30,
  Berserker = 31,
  Savage = 32,
  Heretic = 33,
  Valkyrie = 34,
  Bainshee = 39,
  Eldritch = 40,
  Enchanter = 41,
  Mentalist = 42,
  Blademaster = 43,
  Hero = 44,
  Champion = 45,
  Warden = 46,
  Druid = 47,
  Bard = 48,
  Nightshade = 49,
  Ranger = 50,
  Animist = 55,
  Valewalker = 56,
  Vampiir = 58,
  Warlock = 59,
  Mauler_Alb = 60,
  Mauler_Mid = 61,
  Mauler_Hib = 62,
}

export enum DamageType {
  Crush = 1,
  Slash = 2,
  Thrust = 3,
  Siege = 5,
  Spirit = 17,
}

export enum Realm {
  All = 0,
  Albion = 1,
  Midgard = 2,
  Hibernia = 3,
}

export enum Resistance {
  Stats = 0,
  Crush_0 = 1,
  Slash_0 = 2,
  Thrust_0 = 3,
  Siege = 5,
  Heat_0 = 10,
  Spirit_0 = 11,
  Cold_0 = 12,
  Matter_0 = 13,
  Heat_1 = 14,
  Matter_1 = 15,
  Body_0 = 16,
  Spirit_1 = 17,
  Energy_0 = 18,
  Cold_1 = 19,
  Energy_1 = 20,
  Essence_0 = 21,
  Energy_2 = 22,
  Cold_2 = 23,
  Body_2 = 25,
  Body_3 = 26,
  Body_4 = 27,
}

export enum ShieldSize {
  Small = 1,
  Medium = 2,
  Large = 3,
}

export enum Skill {
  Slash = 1,
  Thrust = 2,
  Bow = 4,
  Parry = 8,
  Sword = 14,
  Hammer = 16,
  Axe = 17,
  LeftAxe = 18,
  Stealth = 19,
  Spear = 26,
  Mending = 29,
  Augmentation = 30,
  Crush = 33,
  Pacification = 34,
  Cave_Magic = 37,
  Darkness = 38,
  Suppression = 39,
  Runecarving = 42,
  Shield = 43,
  Thrown = 44,
  Flexible = 46,
  Staff = 47,
  Summoning = 48,
  Stormcalling = 50,
  Beastcraft = 62,
  Polearm = 64,
  Two_Handed = 65,
  Fire_Magic = 66,
  Wind_Magic = 67,
  Cold_Magic = 68,
  Earth_Magic = 69,
  Light_Magic = 70,
  Matter_Magic = 71,
  Body_Magic = 72,
  Spirit_Magic = 73,
  Mind_Magic = 74,
  Void_Magic = 75,
  Mana_Magic = 76,
  Dual_Wield = 77,
  Composite_Bow = 78,
  Envenom_0 = 79,
  Battlesongs = 82,
  Enhancements = 83,
  Enchantments = 84,
  Illusions = 85,
  Rejuvenation = 88,
  Smiting = 89,
  Longbow = 90,
  Crossbow = 91,
  Flute = 95,
  Chants = 97,
  Instruments = 98,
  Blades = 101,
  Blunt = 102,
  Piercing = 103,
  Large_Weaponry = 104,
  Mentalism = 105,
  Regrowth = 106,
  Nurture = 107,
  Nature_Affinity = 108,
  Music = 109,
  Celtic_Dual = 110,
  Celtic_Spear = 112,
  Recurve_Bow = 113,
  Valor = 114,
  Envenom_1 = 117,
  Critical_Strike = 118,
  Nightshade = 119,
  Deathsight = 120,
  Painworking = 121,
  Death_Servant = 122,
  Soulrending = 123,
  Hand_to_Hand = 124,
  Scythe = 125,
  Bone_Army = 126,
  Arboreal_Path = 127,
  Savagery = 128,
  Creeping_Path = 129,
  Verdant_Path = 130,
  Odins_Will = 133,
  Spectral_Guard = 134,
  Phantasmal_Wail = 135,
  Ethereal_Shriek = 136,
  Shadow_Mastery = 137,
  Vampiiric_Embrace = 138,
  Dementia = 139,
  Witchcraft = 140,
  Cursing = 141,
  Hexing = 142,
  Power_Strikes = 144,
  Magnetism = 145,
  Aura_Manipulation = 146,
  Fist_Wraps = 147,
  Mauler_Staff = 148,
  All_Melee = 300,
  All_Duel = 301,
  All_Archery = 302,
  All_Casting = 303,
  All_Focus = 304,
}

export enum Slot {
  Helm = 1,
  Hands = 2,
  Feet = 3,
  Torso = 5,
  Legs = 7,
  Arms = 8,
}

export enum Stat {
  Strength = 0,
  Dexterity = 1,
  Constitution = 2,
  Quickness = 3,
  Intelligence = 4,
  Piety = 5,
  Empathy = 6,
  Charisma = 7,
  Acuity = 10,
}

export enum Tradeskill {
  Weaponcraft = 1,
  Armorcraft = 2,
  Siegecraft = 3,
  Alchemy = 4,
  Tailoring = 11,
  Fletching = 12,
  Spellcrafting = 13,
}
