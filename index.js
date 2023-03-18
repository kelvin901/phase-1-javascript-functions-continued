function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun('swim')); // "This Saturday, I want to swim!"

const mondayWork = function(activity='go to the office') {
    return `This Monday, I will ${activity}!`;
  }
  console.log(mondayWork()); // This Monday, I will go to the office!
console.log(mondayWork('complete all my assignments')); // This Monday, I will complete all my assignments!

function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }

  const kelvin = wrapAdjective();

kelvin(); // "You are *special*!"
kelvin('great'); // "You are *great*!"

const developer = wrapAdjective('**');

developer(); // "You are **special**!"
developer('amazing'); // "You are **amazing**!"
