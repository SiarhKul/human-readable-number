module.exports = function toReadable(number) {
  const unitAndTensSecontdText = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];
  const tensText = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'];

  const unit = number % 10;
  const tens = ((number - unit) % 100) / 10;
  const tenSecontOrder = number % 100;
  const hundred = (number - unit - tens * 10) / 100;

  let numberString = '';

  if (number === 0) {
    numberString = 'zero'
  };

  if (number >= 100) {
    numberString = unitAndTensSecontdText[hundred] + ' hundred'
  };

  if (tens < 2 && tens) {
    numberString += ' ' + unitAndTensSecontdText[tenSecontOrder]
  } else {
    if (tens) {
      numberString += ' ' + tensText[tens]
    };
    if (unit) {
      numberString += ' ' + unitAndTensSecontdText[unit]
    };
  }
  return numberString.trim();

}
