import { dict, dictUpper } from "./dictionaries";

export function validForm (text, key) {
    let validator = {
        state: null,
        text: text,
        key: key,
    };
    let counter = 0;
    for (let i of text) {
        if (dict.includes(i) || dictUpper.includes(i)) {
            break;
        } else {
            counter ++;
        };
    }
    if (counter === text.length) {
        validator.state = false;
        validator.text = 'Во введённом тексте нет объектов для шифрования!';
        validator.key = null;
        return validator;
    } else if (!Number.isInteger(Number(key))) {
        validator.state = false;
        validator.text = 'Ключ должен являться целым числом!';
        validator.key = null;
        return validator;
    } else if (key < 1 || key > 32) {
        validator.state = false;
        validator.text = 'Диапазон ключей от 1 до 32!';
        validator.key = null;
        return validator;
    } else {
        validator.state = true;
        return validator;
    }
}
