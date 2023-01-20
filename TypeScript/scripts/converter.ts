import { dict, dictUpper } from "./dictionaries";

function innerSwap (letter:string, array:string[], shift:number):string {
    if ((array.indexOf(letter) + Number(shift)) < array.length) {
        return (array[(array.indexOf(letter) + Number(shift))]);
    } else {
        return (array[(array.indexOf(letter) + Number(shift)) - 33]);
    }
}


export function convert (text:string, iter:number):string {
    let result:string[] = [];
    for (let i of text) {
        if (dict.includes(i)) {
            result.push(innerSwap(i, dict, iter));
        } else if (dictUpper.includes(i)) {
            result.push(innerSwap(i, dictUpper, iter));
        } else {
            result.push(i);
        }
    }
    return result.join('');
}