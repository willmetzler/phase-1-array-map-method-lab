const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map( (tutorial) => {
    const words = tutorial.split(" ")
      //console.log(words);
      const uppercasedWords = words.map(word => word.slice(0,1).toUpperCase() + word.slice(1));
      //console.log(uppercasedWords);
      //const newArray = [];
      const newWords = uppercasedWords.join(" ");
      //newArray.push(newWords);
      //return newArray;
      return newWords;
  })
  
}

titleCased();

//const uppercasedTutorial = tutorials.map(string => string.slice(0,1).toUpperCase() + string.slice(1));
//console.log(uppercasedTutorial);



//select each line in the array
//slice the first letter off each line
//uppercase each first letter
//slice the remaining letters off each line
//combine the uppercased first letter and the remaining letters (string + string)

