// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
    if (names.length === 0) {
        return 'no one likes this'
    } else if (names.length === 1) {
        return names[0] +' likes this'
    } else if (names.length === 2) {
        return names[0] +' and '+ names[1] +' like this'
    } else if (names.length === 3) {
        return names[0] + ', '+ names[1] +' and '+ names[2] +' like this'
    } else {
        return names[0] + ', '+ names[1] + ' and '+ (names.length - 2) +' others like this'
        }
  }
  likes([]);
  likes(['Peter']);
  likes(['Jacob', 'Alex']);
  likes(['Max', 'John', 'Mark']);
  likes(['Alex', 'Jacob', 'Mark', 'Max']);
  console.log(likes([]));
  console.log(likes(['Peter']));
  console.log(likes(['Jacob', 'Alex']));
  console.log(likes(['Max', 'John', 'Mark']));
  console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

