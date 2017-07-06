import R from 'ramda';

const parseId = val => parseInt(val, 10);

export default (...keys) => R.evolve(
  keys.reduce((acc, key) => {
    acc[key] = parseId;
    return acc;
  }, {}),
);
