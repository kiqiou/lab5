function getFizzBuzz(num) {
  if (num % 15 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

function getFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i += 1) {
    result *= i;
  }
  return result;
}

function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}

function isTriangle(a, b, c) {
  return (a + b > c) && (a + c > b) && (b + c > a);
}

function doRectanglesOverlap(r1, r2) {
  return !(
    (r1.left + r1.width <= r2.left)
    || (r2.left + r2.width <= r1.left)
    || (r1.top + r1.height <= r2.top)
    || (r2.top + r2.height <= r1.top)
  );
}

function isInsideCircle(circle, point) {
  const dx = point.x - circle.center.x;
  const dy = point.y - circle.center.y;
  return (dx * dx + dy * dy) < (circle.radius * circle.radius);
}

function findFirstSingleChar(str) {
  return str.split('').find((char) => str.indexOf(char) === str.lastIndexOf(char)) || null;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const [start, end] = a < b ? [a, b] : [b, a];
  const left = isStartIncluded ? '[' : '(';
  const right = isEndIncluded ? ']' : ')';
  return `${left}${start}, ${end}${right}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseInteger(num) {
  return Number(String(num).split('').reverse().join(''));
}

function isCreditCardNumber(ccn) {
  const digits = String(ccn).split('').map(Number).reverse();
  const sum = digits
    .map((d, i) => {
      if (i % 2 === 1) {
        const dbl = d * 2;
        return dbl > 9 ? dbl - 9 : dbl;
      }
      return d;
    })
    .reduce((a, b) => a + b, 0);
  return sum % 10 === 0;
}

function getDigitalRoot(num) {
  let sum = num;
  while (sum > 9) {
    sum = String(sum).split('').reduce((acc, d) => acc + Number(d), 0);
  }
  return sum;
}

function isBracketsBalanced(str) {
  const pairs = {
    '(': ')', '[': ']', '{': '}', '<': '>',
  };
  const closings = Object.values(pairs);
  const stack = [];

  str.split('').forEach((c) => {
    if (pairs[c]) {
      stack.push(c);
    } else if (closings.includes(c)) {
      const last = stack.pop();
      if (pairs[last] !== c) {
        stack.push('wrong');
      }
    }
  });

  return stack.length === 0;
}

function toNaryString(num, n) {
  return num.toString(n);
}

function getCommonDirectoryPath(paths) {
  if (!paths.length) return '';
  const splitPaths = paths.map((p) => p.split('/'));
  const result = [];
  for (let i = 0; ; i += 1) {
    const segment = splitPaths[0][i];
    if (splitPaths.every((p) => p[i] === segment)) result.push(segment);
    else break;
  }
  return result.length ? `${result.join('/')}/` : '';
}

function getMatrixProduct(m1, m2) {
  const rows = m1.length;
  const cols = m2[0].length;
  const n = m2.length;
  const res = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      for (let k = 0; k < n; k += 1) {
        res[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  return res;
}

function evaluateTicTacToePosition(position) {
  const lines = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i].map(([x, y]) => position[x] && position[x][y]);
    if (a && a === b && a === c) return a;
  }
  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
