const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false};
  let newName = '';
  let newMembers = [];
  for (name of members) {
    if (typeof(name) === 'string') {
      newName = name.trim();
      newMembers = newMembers.concat(newName.toUpperCase());
    }
  }
  newMembers.sort();
  let teamName = '';
  for (i of newMembers) {
    for (let j = 0; j < i.length; i++) {
      if (i[j] !== ' ') {
        teamName += i[j];
        j = i.length;
      }
    }    
  }
  return teamName;
}

module.exports = {
  createDreamTeam
};
