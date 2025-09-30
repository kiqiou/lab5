function getRegexForGuid() {
  return /^\{[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}$/;
}

function getRegexForPitSpot() {
  return /p.t/;
}

function getPasswordValidator(minLength) {
  return new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{${minLength},}$`,
  );
}

module.exports = {
  getRegexForGuid,
  getRegexForPitSpot,
  getPasswordValidator,
};
