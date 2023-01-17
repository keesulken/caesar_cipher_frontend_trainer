function deconvSwap (letter, array, shift) {
    if ((array.indexOf(letter) - shift) >= 0) {
        return (array[(array.indexOf(letter) - shift)]);
    } else {
        return (array[(array.indexOf(letter) - shift) + 33]);
    }
}


function deconvert (text, iter) {
    let result = [];
    for (let i of text) {
        if (dict.includes(i)) {
            result.push(deconvSwap(i, dict, iter));
        } else if (dictUpper.includes(i)) {
            result.push(deconvSwap(i, dictUpper, iter));       
        } else {
            result.push(i);
        }
    }
    return result.join('');
}
