const getRandomNumber = (max) => Math.floor(Math.random() * max)

const slots = []
for(let i = 0; i < 3; i++) {
  const items = [];
  for(let j = 0; j < 5; j++) {
    items.push({
      name: `item-${i}-${j}`,
      strength: getRandomNumber(30),
      quickness: getRandomNumber(20),
      meleespeed: getRandomNumber(4),
      meleedamage: getRandomNumber(3),
      resist_crush: getRandomNumber(6),
      resist_slash: getRandomNumber(6),
    })
  }
  slots.push(items)
}
