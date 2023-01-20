import { dict, dictUpper } from "./dictionaries";

function deconvSwap (letter:string, array:string[], shift:number):string {
    if ((array.indexOf(letter) - shift) >= 0) {
        return (array[(array.indexOf(letter) - shift)]);
    } else {
        return (array[(array.indexOf(letter) - shift) + 33]);
    }
}


export function deconvert (text:string, iter:number):string {
    let result:string[] = [];
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
