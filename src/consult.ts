interface IBonus {
  [key: string]: number;
}

interface IItem {
  name: string;
  bonuses: IBonus[];
}

export const getDeltas = (
  bonuses: IItem,
  target: IItem,
): IItem =>
  Object
    .keys(target)
    .reduce((acc, key) => {
      acc[key] = acc[key] - bonuses[key] || 0

      return acc
    }, { ...target })

export const sumDeltas = (
  deltas: IItem,
): number =>
  Object
    .keys(deltas)
    .reduce((acc, key) => {
      acc += Math.max(0, deltas[key])

      return acc
    }, 0)

export const pickItem = (
  target: IItem,
  items: IItem[],
): IItem =>
  items.reduce((acc, item) => {
    const deltas = getDeltas(item, target);
    const sum = sumDeltas(deltas);

    if (sum < acc.sum) {
      return { sum, item };
    }

    return acc;
  }, {
    sum: Infinity,
    item: null as IItem,
  }).item

export const pickItems = (
  target: IItem,
  slots: [IItem[]],
): IItem[] =>
  slots.reduce((acc, items) => {
    const item = pickItem(target, items);

    return {
      target: getDeltas(item, target),
      items: [...acc.items, item],
    }
  }, {
    target,
    items: [] as IItem[],
  }).items
