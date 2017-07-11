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
