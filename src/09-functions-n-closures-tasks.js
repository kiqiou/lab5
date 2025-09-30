function getComposition(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function getPowerFunction(exponent) {
  return function (x) {
    return x ** exponent;
  };
}

function getPolynom(...coefficients) {
  if (!coefficients.length) return null;
  return function (x) {
    return coefficients.reduce(
      (acc, coef, index) => acc + coef * x ** (coefficients.length - index - 1),
      0,
    );
  };
}

function memoize(func) {
  let cache;
  return function () {
    if (cache === undefined) {
      cache = func();
    }
    return cache;
  };
}

function retry(func, attempts) {
  return function () {
    let lastError;
    for (let i = 0; i <= attempts; i += 1) {
      try {
        return func();
      } catch (err) {
        lastError = err;
      }
    }
    throw lastError;
  };
}

function logger(func, logFunc) {
  return function (...args) {
    const argStr = args.map((a) => JSON.stringify(a)).join(',');
    logFunc(`${func.name}(${argStr}) starts`);
    const result = func(...args);
    logFunc(`${func.name}(${argStr}) ends`);
    return result;
  };
}

function partialUsingArguments(fn, ...args1) {
  return function (...args2) {
    return fn(...args1, ...args2);
  };
}

function getIdGeneratorFunction(startFrom) {
  let current = startFrom - 1;
  return function () {
    current += 1;
    return current;
  };
}

module.exports = {
  getComposition,
  getPowerFunction,
  getPolynom,
  memoize,
  retry,
  logger,
  partialUsingArguments,
  getIdGeneratorFunction,
};
