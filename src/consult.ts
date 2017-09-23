import {BonusType, IItem} from './types'
import {IImbueValues} from './metadata'

interface IBonusValue {
  [key: number]: number
}

interface IBonuses {
  [key: number]: number | IBonusValue
}

export const getBonusesAsObject = (item: IItem): IBonuses =>
  item.bonuses.reduce((acc, {id, type, value}) => {
    if (typeof id === 'number') {
      acc[type] = acc[type] || {}
      acc[type][id] = value
    } else {
      acc[type] = value
    }

    return acc
  }, {} as IBonuses)

export const getDeltas = (bonuses: IBonuses, target: IBonuses): IBonuses =>
  Object.keys(target).reduce(
    (acc, key) => {
      if (typeof acc[key] === 'number') {
        acc[key] = acc[key] - bonuses[key] || 0
      } else {
        acc[key] = getDeltas(bonuses[key], acc[key])
      }

      return acc
    },
    {...target},
  )

export const sumDeltas = (deltas: IBonuses): number =>
  Object.keys(deltas).reduce((acc, key) => {
    if (typeof deltas[key] === 'number') {
      acc += Math.max(0, deltas[key])
    } else {
      acc += sumDeltas(deltas[key])
    }

    return acc
  }, 0)

export const getPossibleGemsToCreate = (
  imbueValues: IImbueValues,
  target: IBonuses,
) => {
  console.log(imbueValues, target)

  return []
}

export const createItem = (target: IBonuses): IBonuses => {
  // console.log(target)
  return target
}

export const pickItem = (target: IBonuses, items: IItem[]): IItem =>
  items.reduce(
    (acc, item) => {
      const bonuses = getBonusesAsObject(item)
      const deltas = getDeltas(bonuses, target)
      const sum = sumDeltas(deltas)

      if (sum < acc.sum) {
        return {sum, item}
      }

      return acc
    },
    {
      sum: Infinity,
      item: null as IItem,
    },
  ).item

export const pickItems = (target: IBonuses, slots: Array<IItem[]>): IItem[] =>
  slots.reduce(
    (acc, items) => {
      const item = pickItem(target, items)
      const bonuses = getBonusesAsObject(item)

      return {
        target: getDeltas(bonuses, target),
        items: [...acc.items, item],
      }
    },
    {
      target,
      items: [] as IItem[],
    },
  ).items
