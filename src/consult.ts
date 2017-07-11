import {IItem} from './types'

interface IBonuses {
  [key: number]: number
}

export const getBonusesAsObject = (item: IItem): IBonuses =>
  item.bonuses.reduce((acc, {id = '', type, value}) => {
    acc[`${type}-${id}`] = value

    return acc
  }, {} as IBonuses)

export const getDeltas = (bonuses: IBonuses, target: IBonuses): IBonuses =>
  Object.keys(target).reduce(
    (acc, key) => {
      acc[key] = acc[key] - bonuses[key] || 0

      return acc
    },
    {...target},
  )

export const sumDeltas = (deltas: IBonuses): number =>
  Object.keys(deltas).reduce((acc, key) => {
    acc += Math.max(0, deltas[key])

    return acc
  }, 0)

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
