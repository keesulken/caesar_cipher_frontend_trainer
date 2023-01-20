import { validForm, Validator } from "./validator";
import { convert } from "./converter";
import { deconvert } from "./deconverter";


export function submitter (event:any, blockName:string) {
    event.preventDefault();
    let text:string = event.target.elements['text'].value;
    let key:string = event.target.elements['key'].value;
    let validator:Validator = validForm(text, key);
    let error:any = document.querySelector(`.${blockName}-error-string`);
    let success:any = document.querySelector(`.${blockName}-success-string`);
    if (!validator.state) {
        error.innerHTML = validator.text;
    } else {
        error.innerHTML = '';
        if (blockName = 'first') {
            success.innerHTML = convert(text, Number(key));
        } else {
            success.innerHTML = deconvert(text, Number(key));
        };
    };
};