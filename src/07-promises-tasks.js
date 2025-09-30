/**
 * Returns a Promise based on a boolean answer
 */
function willYouMarryMe(isPositiveAnswer) {
  return new Promise((resolve, reject) => {
    if (typeof isPositiveAnswer !== 'boolean') {
      reject(new Error('Wrong parameter is passed! Ask her again.'));
    } else if (isPositiveAnswer) {
      resolve('Hooray!!! She said "Yes"!');
    } else {
      resolve('Oh no, she said "No".');
    }
  });
}

/**
 * Returns a Promise that resolves with an array of all resolved values
 */
function processAllPromises(array) {
  return Promise.all(array);
}

/**
 * Returns a Promise that resolves with the value of the first resolved Promise
 */
function getFastestPromise(array) {
  return Promise.race(array);
}

/**
 * Chains promises sequentially and applies action, ignoring rejected ones
 */
function chainPromises(array, action) {
  const results = [];
  return array
    .reduce(
      (prev, curr) => prev
        .then(() => curr)
        .then((value) => results.push(value))
        .catch(() => {}), // игнорируем ошибки
      Promise.resolve(),
    )
    .then(() => results.reduce(action));
}

module.exports = {
  willYouMarryMe,
  processAllPromises,
  getFastestPromise,
  chainPromises,
};
