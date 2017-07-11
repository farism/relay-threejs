const getRandomNumber = max => Math.floor(Math.random() * max)

const slots = []
for (let i = 0; i < 3; i++) {
  const items = []
  for (let j = 0; j < 5; j++) {
    items.push({
      name: `item-${i}-${j}`,
      bonuses: [
        {
          type: 1,
          id: 0,
          value: getRandomNumber(30),
        },
        {
          type: 1,
          id: 3,
          value: getRandomNumber(20),
        },
        {
          type: 19,
          value: getRandomNumber(4),
        },
        {
          type: 8,
          value: getRandomNumber(3),
        },
        {
          type: 5,
          id: 18,
          value: getRandomNumber(6),
        },
        {
          type: 5,
          id: 4,
          value: getRandomNumber(10),
        },
      ],
    })
  }

  slots.push(items)
}

console.log(JSON.stringify(slots))
