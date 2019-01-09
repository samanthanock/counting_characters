function countLetters(strToBeCounted) {
  var newObject = {};

  for (var i = 0; i < strToBeCounted.length; i++) {
    var letter = strToBeCounted[i];

    if (newObject[letter]) {
      newObject[letter].push(i);
    } else {
      newObject[letter] = [i];
    }
    delete newObject[' '];
  }
  return newObject;
}
console.log(countLetters('Samantha Marie Nock'));
