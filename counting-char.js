function countLetters(str) {
  var newArray = str.split('');
  var newObject = {};
  for (var i = 0; i < newArray.length; i++) {
    var letter = newArray[i];

    if (newObject[letter]) {
      newObject[letter]++;
    } else {
      newObject[letter] = 1;
    }
    delete newObject[''];
  }
  return newObject;
}
console.log(countLetters('Samantha Mrie Nock'));
