module.exports = function toReadable(number) {
    let toTen = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };
    let toTwenty = {
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
    };
    let dozens = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };
    if (number >= 0 && number <= 9) {
        return toTen[number.toString()[0]];
    }
    if (number >= 11 && number <= 19) {
        return toTwenty[number.toString()[1]];
    }
    if (number >= 10 && number % 10 == 0 && number < 100) {
        return dozens[number.toString()[0]];
    }

    if (number >= 20 && number % 10 !== 0 && number < 100) {
        return dozens[number.toString()[0]] + ' ' + toTen[number.toString()[1]];
    }
    /************************hundreds************************* */
    if (number >= 100 && number < 1000) {
        if (number % 100 == 0) {
            return toTen[number.toString()[0]] + ' ' + 'hundred';
        }
        if (number % 10 == 0) {
            return toTen[number.toString()[0]] + ' ' + 'hundred' + ' ' + dozens[number.toString()[1]];
        }
        if ([number.toString()[1]] == 0 && number.toString()[2] !== 0) {
            return toTen[number.toString()[0]] + ' ' + 'hundred' + ' ' + toTen[number.toString()[2]];
        }
        if ([number.toString()[1]] == 1) {
            return toTen[number.toString()[0]] + ' ' + 'hundred' + ' ' + toTwenty[number.toString()[2]];
        } else {
            return toTen[number.toString()[0]] + ' ' + 'hundred' + ' ' + dozens[number.toString()[1]] + ' ' + toTen[number.toString()[2]];
        }
    }
}