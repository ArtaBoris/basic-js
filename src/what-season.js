const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  try {
    date.toUTCString();
  } catch {
    throw new Error("Invalid date!");
  }
  if (
    date instanceof Date &&
    typeof date.getUTCFullYear() == "number" &&
    typeof date !== "date" &&
    !!date.toUTCString()
  ) {
    var seasonNumber = date.getMonth();
  } else {
    throw new TypeError("Invalid date!");
  }

  var season;

  if (seasonNumber > 1 && seasonNumber <= 4) {
    season = "spring";
  } else if (seasonNumber >= 5 && seasonNumber <= 7) {
    season = "summer";
  } else if (seasonNumber >= 8 && seasonNumber <= 10) {
    season = "autumn";
  } else {
    season = "winter";
  }

  return season;
}

module.exports = {
  getSeason,
};