function parseDataFromRfc2822(value) {
  return new Date(value);
}

function parseDataFromIso8601(value) {
  return new Date(value);
}

function isLeapYear(date) {
  const year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function timeSpanToString(startDate, endDate) {
  const diff = endDate - startDate;
  const hours = String(Math.floor(diff / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
  const milliseconds = String(diff % 1000).padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function angleBetweenClockHands(date) {
  const hours = date.getUTCHours() % 12;
  const minutes = date.getUTCMinutes();
  const hourAngle = 30 * hours + 0.5 * minutes;
  const minuteAngle = 6 * minutes;
  let angle = Math.abs(hourAngle - minuteAngle);
  if (angle > 180) angle = 360 - angle;
  return (angle * Math.PI) / 180;
}

function getDay(dayNumber, isLeap) {
  const months = [
    ['January', 31],
    ['February', isLeap ? 29 : 28],
    ['March', 31],
    ['April', 30],
    ['May', 31],
    ['June', 30],
    ['July', 31],
    ['August', 31],
    ['September', 30],
    ['October', 31],
    ['November', 30],
    ['December', 31],
  ];

  let dayCount = dayNumber;

  for (let i = 0; i < months.length; i += 1) {
    const [month, days] = months[i];
    if (dayCount <= days) return `${month}, ${dayCount}`;
    dayCount -= days;
  }

  return 'Invalid day';
}

module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
  getDay,
};
