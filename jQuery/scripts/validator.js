import { dict, dictUpper } from dictionaries;

function validForm (text, key) {
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
        validator.text = 'Во введённом тексте нет объектов для шифрования';
        validator.key = null;
        return validator;
    } else if (!Number.isInteger(key)) {
        validator.state = false;
        validator.text = null;
        validator.key = 'Ключ должен являться целым числом';
        return validator;
    } else if (key < 1 || key > 32) {
        validator.state = false;
        validator.text = null;
        validator.key = 'Диапазон ключей от 1 до 32';
        return validator;
    } else {
        validator.state = true;
        return validator;
    }
}

let hello = () => {
    console.log('hello')
};

export default { validForm, hello };