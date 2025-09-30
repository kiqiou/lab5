/**
 * Returns the result of concatenation of two strings.
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}

/**
 * Returns the length of given string.
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of string template.
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 */
function extractNameFromTemplate(value) {
  return value.replace('Hello, ', '').replace('!', '');
}

/**
 * Returns a first char of the given string.
 */
function getFirstChar(value) {
  return value[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Returns a string that repeated the specified number of times.
 */
function repeatString(value, count) {
  return value.repeat(count);
}

/**
 * Remove the first occurrence of string inside another string.
 */
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

/**
 * Remove the first and last angle brackets from tag string.
 */
function unbracketTag(str) {
  return str.slice(1, -1);
}

/**
 * Converts all characters of the specified string into the upper case.
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Extracts e-mails from string with semicolon delimiter.
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height.
 */
function getRectangleString(width, height) {
  const top = `┌${'─'.repeat(width - 2)}┐\n`;
  const middle = `│${' '.repeat(width - 2)}│\n`.repeat(height - 2);
  const bottom = `└${'─'.repeat(width - 2)}┘\n`;
  return top + middle + bottom;
}

/**
 * Encode specified string with ROT13 cipher.
 */
function encodeToRot13(str) {
  return str.replace(/[A-Za-z]/g, (c) => {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
  });
}

/**
 * Returns true if the value is string; otherwise false.
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns playing card id.
 */
function getCardId(value) {
  const cards = [
    'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠',
  ];
  return cards.indexOf(value);
}

module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
